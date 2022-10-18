import { LatLngExpression, LayerGroup, Map, Marker as LeafletMarker, MarkerOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';
export interface MarkerProps extends MarkerOptions, ContainerProps {
    position: LatLngExpression;
}
export declare class Marker extends Container<LeafletMarker, MarkerProps, Map | LayerGroup> {
    createLayer(props: ContextBased<MarkerProps, any>): LeafletMarker<any>;
    updateLayer(marker: LeafletMarker<any>, props: ContextBased<MarkerProps, any>, prevProps: ContextBased<MarkerProps, any>): void;
}
