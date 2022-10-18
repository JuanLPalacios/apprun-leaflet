import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';
export interface TileLayerProps extends TileLayerOptions, ContainerProps {
    url: string;
}
export declare class TileLayer extends Container<LeafletTileLayer, TileLayerProps> {
    createLayer(props: ContextBased<TileLayerProps>): LeafletTileLayer;
    updateLayer(layer: LeafletTileLayer, props: ContextBased<TileLayerProps>, prevProps: ContextBased<TileLayerProps>): void;
}
