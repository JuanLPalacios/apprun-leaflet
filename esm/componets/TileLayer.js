import { TileLayer as LeafletTileLayer } from 'leaflet';
import { Container } from '../abstracts/Container';
export class TileLayer extends Container {
    createLayer(props) {
        const { url, context } = props;
        return new LeafletTileLayer(url, props).addTo(context);
    }
    ;
    updateLayer(layer, props, prevProps) {
        if (props.url != null && props.url !== prevProps.url) {
            layer.setUrl(props.url);
        }
    }
    ;
}
//# sourceMappingURL=TileLayer.js.map