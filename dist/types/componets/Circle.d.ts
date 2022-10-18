import { LatLngExpression, LayerGroup, Map, Circle as LeafletCircle, CircleMarkerOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';
export interface CircleProps extends CircleMarkerOptions, ContainerProps {
    position: LatLngExpression;
    radius: number;
}
export declare class Circle extends Container<LeafletCircle, CircleProps, Map | LayerGroup> {
    createLayer(props: ContextBased<CircleProps, any>): LeafletCircle<any>;
    updateLayer(circle: LeafletCircle<any>, props: ContextBased<CircleProps, any>, prevProps: ContextBased<CircleProps, any>): void;
}
