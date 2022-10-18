import { Layer as LeafletLayer } from 'leaflet';
import { Container } from '../abstracts/Container';
export class Layer extends Container {
    createLayer(props) {
        return new LeafletLayer(props);
    }
    updateLayer(layer, props, prevProps) {
    }
}
//# sourceMappingURL=Layer.js.map