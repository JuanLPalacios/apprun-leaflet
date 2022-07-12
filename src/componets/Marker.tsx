import {
  LatLngExpression,
  Marker as LeafletMarker, MarkerOptions,
} from 'leaflet';
import app, { Component, VNode } from 'apprun';
import { EventedProps } from '../types/EventedProps';
import { ContextBased } from '../types/ContextBased';

export interface MarkerProps extends MarkerOptions, EventedProps {
  children?: VNode[]
  position: LatLngExpression
}

export class Marker extends Component<MarkerProps> {
  marker:LeafletMarker;

  constructor(props:ContextBased<MarkerProps>,...p){
    super(props,...p);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { position, children } = props;
    this.marker = new LeafletMarker(position, props);
    if(props.context) {
      this.marker.addTo(props.context);
    }
  }

  view = (state = this.state) => {
    return <div>
      {state.children}
    </div>;
  };

  mounted = (props: ContextBased<MarkerProps>, children: any[], state: ContextBased<MarkerProps>) => {

    const { context } = state;
    state.children = state.children?.map(node=>(node.tag as any).prototype instanceof Component? { ...node, props:{ ...node.props,context } } : node );
    const marker = this.marker;
    if (props.context !== state.context) {
      if(state.context) {marker.remove();}
      marker.addTo(props.context);
    }
    if (props.icon != null && props.icon !== state.icon) {
      marker.setIcon(props.icon);
    }
    if (
      props.zIndexOffset != null &&
      props.zIndexOffset !== state.zIndexOffset
    ) {
      marker.setZIndexOffset(props.zIndexOffset);
    }
    if (props.opacity != null && props.opacity !== state.opacity) {
      marker.setOpacity(props.opacity);
    }
    if (marker.dragging != null && props.draggable !== state.draggable) {
      if (props.draggable === true) {
        marker.dragging.enable();
      } else {
        marker.dragging.disable();
      }
    }
    return { ...props, children };
  };
}