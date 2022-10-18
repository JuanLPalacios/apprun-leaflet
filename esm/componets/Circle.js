import { Circle as LeafletCircle } from 'leaflet';
import { Container } from '../abstracts/Container';
export class Circle extends Container {
    createLayer(props) {
        const { position } = props;
        return new LeafletCircle(position, props).addTo(props.context);
    }
    updateLayer(circle, props, prevProps) {
        if (props.position != null && props.position !== prevProps.position) {
            circle.setLatLng(props.position);
        }
        if (props.radius != null && props.radius !== prevProps.radius) {
            circle.setRadius(props.radius);
        }
        circle.setStyle(Object.assign(Object.assign({}, prevProps), props));
    }
}
//# sourceMappingURL=Circle.js.map