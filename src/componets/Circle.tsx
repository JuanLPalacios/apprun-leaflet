import {
  LatLngExpression,
  LayerGroup,
  Map,
  Circle as LeafletCircle,
  CircleMarkerOptions
} from 'leaflet';
import app, { Component, VNode } from 'apprun';
import { EventedProps } from '../types/EventedProps';
import { ContextBased } from '../types/ContextBased';
import { LayerProps } from './Layer';
import { Container, ContainerProps } from '../abstracts/Container';

export interface CircleProps extends CircleMarkerOptions, ContainerProps {
  position: LatLngExpression
  radius: number
}

export class Circle extends Container<LeafletCircle, CircleProps, Map | LayerGroup> {
  createLayer(props: ContextBased<CircleProps, any>): LeafletCircle<any> {
    const { position } = props;
    return new LeafletCircle(position, props).addTo(props.context);
  }
  updateLayer(circle: LeafletCircle<any>, props: ContextBased<CircleProps, any>, prevProps: ContextBased<CircleProps, any>): void {
    if (props.position != null && props.position !== prevProps.position) {
      circle.setLatLng(props.position);
    }
    if (props.radius != null && props.radius !== prevProps.radius) {
      circle.setRadius(props.radius);
    }
    circle.setStyle({...prevProps, ...props});
  }
}