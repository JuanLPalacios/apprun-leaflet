import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Layer, LayerProps } from './Layer';
export interface TileLayerProps extends TileLayerOptions, LayerProps {
    url: string;
}
export declare class TileLayer extends Layer<LeafletTileLayer, TileLayerProps> {
    createLayer: (props: ContextBased<TileLayerProps>) => LeafletTileLayer;
    updateLayer: (layer: LeafletTileLayer, props: ContextBased<TileLayerProps>, prevProps: ContextBased<TileLayerProps>) => void;
}
