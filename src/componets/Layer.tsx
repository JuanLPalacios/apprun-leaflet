import { Layer as LeafletLayer, LayerOptions} from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';

export interface LayerProps extends LayerOptions, ContainerProps {

}

export class Layer extends Container<LeafletLayer, LayerProps> {
  createLayer(props: ContextBased<LayerProps>): LeafletLayer {
    return new LeafletLayer(props);
  }

  updateLayer(layer: LeafletLayer, props: ContextBased<LayerProps>, prevProps: ContextBased<LayerProps>): void {
  }
}