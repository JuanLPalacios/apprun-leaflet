import { LatLngExpression, Layer, Tooltip as LeafletTooltip, TooltipOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';
export interface TooltipProps extends TooltipOptions, ContainerProps {
    position?: LatLngExpression;
}
export declare class Tooltip extends Container<LeafletTooltip, TooltipProps, Layer> {
    createLayer(props: ContextBased<TooltipProps, any>): LeafletTooltip;
    updateLayer(tooltip: LeafletTooltip, props: ContextBased<TooltipProps, any>, prevProps: ContextBased<TooltipProps, any>): void;
    contentRendered: (tooltip: LeafletTooltip, props: ContextBased<TooltipProps, any>, contents: HTMLElement) => void;
}
