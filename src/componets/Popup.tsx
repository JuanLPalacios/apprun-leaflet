import {
  LatLngExpression,
  Popup as PopupMarker,
  PopupOptions,
} from 'leaflet';
import app, { Component, VNode } from 'apprun';
import { EventedProps } from '../types/EventedProps';
import { ContextBased } from '../types/ContextBased';

export interface PopupProps extends PopupOptions, EventedProps, ContextBased<{}> {
  children?: VNode[]
  position?: LatLngExpression
}

export class Popup extends Component<PopupProps> {
  popup:PopupMarker;

  view = (state = this.state) => {
    const { context:container } = state;
    if ((!this.popup) ) {
      if(this.popup) {this.popup.remove();}
      container.bindPopup("");
      this.popup = container.getPopup();
    }
    const popup = this.popup;
    const context = this.popup;
    state.children = state.children?.map(node=>
      (typeof node) === 'string'?
        node :(
          (node.tag as any).prototype instanceof Component? { ...node, props:{ ...node.props ,context } } : node
        )
    );
    return (Array.isArray(state.children) && (state.children.length > 1))?
    <div ref={(node) => {console.log(node);popup.setContent(node)}} >
      {state.children}
    </div> : 
    (typeof state.children[0] === 'string'?
      (()=>{
        ((node)=>{console.log(node);popup.setContent(node)})(state.children[0] as any as string);
        return <>{state.children}</>
      })():
      {...state.children[0], props:{...state.children[0].props, ref:(node)=>{console.log(node);popup.setContent(node)}}}
    )
  };

  mounted = (props: ContextBased<PopupProps>, children: any[], state: ContextBased<PopupProps>) => {
    const { context } = state;
    if ( (props.context !== state.context) || (!this.popup) ) {
      if(this.popup) {this.popup.remove();}
      context.bindPopup("");
      this.popup = context.getPopup();
    }
    if (props.position != null && props.position !== state.position) {
      this.popup.setLatLng(props.position);
    }
    return { ...props, children };
  };
}