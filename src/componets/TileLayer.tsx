import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Layer, LayerProps } from './Layer';

export interface TileLayerProps extends TileLayerOptions, LayerProps {
    url: string
  }

export class TileLayer extends Layer<LeafletTileLayer, TileLayerProps> {
  createLayer = (props: ContextBased<TileLayerProps>) => {
    const { url, ...options } = props;
    return new LeafletTileLayer(url, options);
  };

  updateLayer = (layer:LeafletTileLayer, props:ContextBased<TileLayerProps>, prevProps:ContextBased<TileLayerProps>)=>{
    // eslint-disable-next-line eqeqeq
    if (props.url != null && props.url !== prevProps.url) {
      layer.setUrl(props.url);
    }
  };
}