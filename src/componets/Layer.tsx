import app,{ Component, VNode } from 'apprun';
import { InteractiveLayerOptions, Layer as LeafletLayer, LayerOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { EventedProps } from '../types/EventedProps';

export interface LayerProps extends EventedProps, LayerOptions {
    children?: Array<VNode | string>
}
export interface InteractiveLayerProps
  extends LayerProps,
    InteractiveLayerOptions {}

export class Layer<T extends LeafletLayer, E extends LayerProps> extends Component<E> {
  layer?:T;
  state!:ContextBased<E>;

  constructor(props:ContextBased<E>,...p){
    super(props,...p);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }

  view = (state = this.state) => {
    if (!this.layer) {
      this.layer = this.createLayer(state);
    }
    if(state.context) {
      this.layer.addTo(state.context);
    }
    return <div>
      {state.children}
    </div>;
  };

  mounted = (props: ContextBased<E>, children: any[], state: ContextBased<E>) => {
    const context = this.layer;
    state.children = state.children?.map(node=>
      typeof node === 'string'?
        node :(
          (node.tag as any).prototype instanceof Component? { ...node, props:{ ...node.props ,context } } : node
        )
    );
    if (props.context !== state.context) {
      if(state.context) {this.layer.remove();}
      this.layer.addTo(props.context);
    }
    this.updateLayer(this.layer, props, state);
    return { ...props, children };
  };

  createLayer = (props:ContextBased<E>)=>{
    return (new LeafletLayer(props) as T);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  updateLayer = (layer:T, props:ContextBased<E>, prevProps:ContextBased<E>)=>{  };
}