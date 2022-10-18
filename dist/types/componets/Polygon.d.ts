import { LatLngExpression, LayerGroup, Map, Polygon as LeafletPolygon, PolylineOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';
export interface PolygonProps extends PolylineOptions, ContainerProps {
    latlngs: LatLngExpression[];
}
export declare class Polygon extends Container<LeafletPolygon, PolygonProps, Map | LayerGroup> {
    createLayer(props: ContextBased<PolygonProps, any>): LeafletPolygon<any>;
    updateLayer(poligon: LeafletPolygon<any>, props: ContextBased<PolygonProps, any>, prevProps: ContextBased<PolygonProps, any>): void;
}
