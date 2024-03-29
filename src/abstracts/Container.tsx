import app,{ Component, VNode } from 'apprun';
import { Evented, InteractiveLayerOptions, Layer as LeafletLayer, LayerOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { EventedProps } from '../types/EventedProps';

export interface ContainerProps extends EventedProps {
    children?: Array<VNode | string> | VNode | string
}

export abstract class Container<T extends Evented, P extends ContainerProps, E = any> extends Component<P> {
  context?:T;
  state!:ContextBased<P,E>;

  constructor(props:ContextBased<P>,...p){
    super(props,...p);
    this.context = this.createLayer(props).on(props.eventHandlers || {});

  }

  view = (state = this.state) => {
    const context = this.context;
    if(!Array.isArray(state.children)) state.children = [state.children]
    state.children = state.children?.map(node=>
      typeof node === 'string'?
        node :(
          (node.tag as any).prototype instanceof Component? { ...node, props:{ ...node.props ,context } } : node
        )
    );
    return <div ref={(node)=>this.contentRendered(context, state, node)}>
      {state.children}
    </div>;
  };

  mounted = (props: ContextBased<P>, children: any[], state: ContextBased<P>) => {
    this.updateLayer(this.context, props, state);
    this.context.on('popupopen', () =>
    (this.context as any)._popup?._closeButton?.addEventListener('click', (event) => {
      event.preventDefault();
    }));
    return { ...props, children };
  };

  
  contentRendered: (layer:T, props:ContextBased<P>, contents:HTMLElement) => void = ()=>{};

  abstract createLayer(props:ContextBased<P>):T;

  abstract updateLayer(layer:T, props:ContextBased<P>, prevProps:ContextBased<P>):void;
}