import {
  LatLngExpression,
  Popup as PopupMarker,
  PopupOptions,
} from 'leaflet';
import app, { Component, VNode } from 'apprun';
import { EventedProps } from '../types/EventedProps';
import { ContextBased } from '../types/ContextBased';

export interface PopupProps extends PopupOptions, EventedProps {
  children?: VNode[]
  position?: LatLngExpression
}

app.render

export class Popup extends Component<PopupProps> {
  popup:PopupMarker;

  constructor(props:ContextBased<PopupProps>,...p){
    super(props,...p);
    this.popup = new PopupMarker(props);
    if(props.context) {
      this.popup.addTo(props.context);
    }
  }

  view = (state = this.state) => {
    const popup = this.popup;
    return (Array.isArray(state.children) && (state.children.length > 1))?<div ref={(node) => popup.setContent(node)} >
      {state.children}
    </div> : {...state.children[0], ref:(node)=>popup.setContent(node)}
  };

  mounted = (props: ContextBased<PopupProps>, children: any[], state: ContextBased<PopupProps>) => {
    const { context } = props;
    state.children = state.children?.map(node=>(node.tag as any).prototype instanceof Component? { ...node, props:{ ...node.props,context } } : node );
    const popup = this.popup;
    if (props.context !== state.context) {
      if(state.context) {popup.remove();}
      popup.openOn(props.context);
    }
    if (props.position != null && props.position !== state.position) {
      popup.setLatLng(props.position);
    }
    return { ...props, children };
  };
}