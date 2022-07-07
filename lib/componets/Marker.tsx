/* eslint-disable eqeqeq */
import {
  LatLngExpression,
  Marker as LeafletMarker, MarkerOptions,
} from 'leaflet';
import app, { Component, VNode } from 'apprun';
import { EventedProps } from '../@types/EventedProps';

export interface MarkerProps extends MarkerOptions, EventedProps {
  children?: VNode[]
  position: LatLngExpression
}

export class Marker extends Component<MarkerProps> {
  marker:LeafletMarker;

  constructor(props:IContextBased<MarkerProps>,...p){
    super(props,...p);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { position, children, ...options } = props;
    this.marker = new LeafletMarker(position, options);
    if(props.context) {
      this.marker.addTo(props.context);
    }
  }

  view = (state = this.state) => {
    return <div>
      {state.children}
    </div>;
  };

  mounted = (props: IContextBased<MarkerProps>, children: any[], state: IContextBased<MarkerProps>) => {

    const { context } = state;
    state.children = state.children?.map(node=>(node.tag as any).prototype instanceof Component? { ...node, props:{...node.props,context} } : node );
    this.updateMarker(this.marker, props, state);
    return { ...props, children };
  };

  updateMarker(marker, props, prevProps) {
    if (props.context !== prevProps.context) {
      if(prevProps.context) {marker.remove();}
      const a = marker.addTo(props.context);
      console.log(a);
    }
    if (props.icon != null && props.icon !== prevProps.icon) {
      marker.setIcon(props.icon);
    }
    if (
      props.zIndexOffset != null &&
      props.zIndexOffset !== prevProps.zIndexOffset
    ) {
      marker.setZIndexOffset(props.zIndexOffset);
    }
    if (props.opacity != null && props.opacity !== prevProps.opacity) {
      marker.setOpacity(props.opacity);
    }
    if (marker.dragging != null && props.draggable !== prevProps.draggable) {
      if (props.draggable === true) {
        marker.dragging.enable();
      } else {
        marker.dragging.disable();
      }
    }
  }
}