import {
  LatLngExpression,
  LayerGroup,
  Map,
  Marker as LeafletMarker, MarkerOptions,
} from 'leaflet';
import app, { Component, VNode } from 'apprun';
import { EventedProps } from '../types/EventedProps';
import { ContextBased } from '../types/ContextBased';
import { LayerProps } from './Layer';
import { Container, ContainerProps } from '../abstracts/Container';

export interface MarkerProps extends MarkerOptions, ContainerProps {
  position: LatLngExpression
}

export class Marker extends Container<LeafletMarker, MarkerProps, Map | LayerGroup> {
  createLayer(props: ContextBased<MarkerProps, any>): LeafletMarker<any> {
    const { position } = props;
    return new LeafletMarker(position, props).addTo(props.context);
  }
  updateLayer(marker: LeafletMarker<any>, props: ContextBased<MarkerProps, any>, prevProps: ContextBased<MarkerProps, any>): void {
    if (props.context !== prevProps.context) {
      if(prevProps.context) {marker.remove();}
      marker.addTo(props.context);
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