import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';

export interface TileLayerProps extends TileLayerOptions, ContainerProps {
    url: string
  }

export class TileLayer extends Container<LeafletTileLayer, TileLayerProps> {
  createLayer(props: ContextBased<TileLayerProps>): LeafletTileLayer {
    const { url, ...options } = props;
    return new LeafletTileLayer(url, options);
  };

  updateLayer(layer: LeafletTileLayer, props: ContextBased<TileLayerProps>, prevProps: ContextBased<TileLayerProps>): void {
    if (props.url != null && props.url !== prevProps.url) {
      layer.setUrl(props.url);
    }
  };
}