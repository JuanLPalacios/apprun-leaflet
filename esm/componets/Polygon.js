import { Polygon as LeafletPolygon } from 'leaflet';
import { Container } from '../abstracts/Container';
export class Polygon extends Container {
    createLayer(props) {
        const { latlngs } = props;
        return new LeafletPolygon(latlngs, props).addTo(props.context);
    }
    updateLayer(poligon, props, prevProps) {
        if (props.latlngs != null && props.latlngs !== prevProps.latlngs) {
            poligon.setLatLngs(props.latlngs);
        }
        poligon.setStyle(Object.assign(Object.assign({}, prevProps), props));
    }
}
//# sourceMappingURL=Polygon.js.map