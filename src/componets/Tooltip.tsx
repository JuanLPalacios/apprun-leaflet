import {
  LatLngExpression,
  Layer,
  Tooltip as LeafletTooltip,
  TooltipOptions,
} from 'leaflet';
import app, { Component, VNode } from 'apprun';
import { EventedProps } from '../types/EventedProps';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';

export interface TooltipProps extends TooltipOptions, ContainerProps {
  position?: LatLngExpression
}

export class Tooltip extends Container<LeafletTooltip, TooltipProps, Layer> {
  createLayer(props: ContextBased<TooltipProps, any>): LeafletTooltip {
    const tooltip = new LeafletTooltip(props)
    props.context.bindTooltip(tooltip);
    return tooltip
  }
  updateLayer(tooltip: LeafletTooltip, props: ContextBased<TooltipProps, any>, prevProps: ContextBased<TooltipProps, any>): void {
    if (props.position != null && props.position !== prevProps.position) {
      tooltip.setLatLng(props.position);
    }
  }
  contentRendered = (tooltip: LeafletTooltip, props: ContextBased<TooltipProps, any>, contents: HTMLElement) => {
    tooltip.setContent(contents)
  };
}