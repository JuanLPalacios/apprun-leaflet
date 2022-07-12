import { Layer as LeafletLayer} from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';

export class Layer extends Container<LeafletLayer, ContainerProps> {
  createLayer(props: ContextBased<ContainerProps>): LeafletLayer {
    return new LeafletLayer(props);
  }

  updateLayer(layer: LeafletLayer, props: ContextBased<ContainerProps>, prevProps: ContextBased<ContainerProps>): void {
    
  }
}