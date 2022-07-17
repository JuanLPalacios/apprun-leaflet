import {
  LatLngExpression,
  Layer,
  Map,
  Popup as PopupMarker,
  PopupOptions,
} from 'leaflet';
import app, { Component, VNode } from 'apprun';
import { EventedProps } from '../types/EventedProps';
import { ContextBased } from '../types/ContextBased';
import { Container } from '../abstracts/Container';

export interface PopupProps extends PopupOptions, EventedProps, ContextBased<{}> {
  children?: VNode[]
  position?: LatLngExpression
}

export class Popup extends Container<PopupMarker, PopupProps, Layer | Map> {
  createLayer(props: ContextBased<PopupProps, any>): PopupMarker {
    const popup = new PopupMarker(props)
    const {context} = props
    if(context instanceof Layer){
      context.bindPopup(popup);
    } else if( context instanceof Map){
      popup.openOn(context)
    }
    return popup
  }
  updateLayer(popup: PopupMarker, props: ContextBased<PopupProps, any>, prevProps: ContextBased<PopupProps, any>): void {
    if (props.position != null && props.position !== prevProps.position) {
      popup.setLatLng(props.position);
    }
  }
  
  contentRendered = (popup: PopupMarker, props: ContextBased<PopupProps, any>, contents: HTMLElement) => {
    popup.setContent(contents)
  };
}