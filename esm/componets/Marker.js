import { Marker as LeafletMarker, } from 'leaflet';
import { Container } from '../abstracts/Container';
export class Marker extends Container {
    createLayer(props) {
        const { position } = props;
        return new LeafletMarker(position, props).addTo(props.context);
    }
    updateLayer(marker, props, prevProps) {
        if (props.context !== prevProps.context) {
            if (prevProps.context) {
                marker.remove();
            }
            marker.addTo(props.context);
        }
        if (props.icon != null && props.icon !== prevProps.icon) {
            marker.setIcon(props.icon);
        }
        if (props.zIndexOffset != null &&
            props.zIndexOffset !== prevProps.zIndexOffset) {
            marker.setZIndexOffset(props.zIndexOffset);
        }
        if (props.opacity != null && props.opacity !== prevProps.opacity) {
            marker.setOpacity(props.opacity);
        }
        if (marker.dragging != null && props.draggable !== prevProps.draggable) {
            if (props.draggable === true) {
                marker.dragging.enable();
            }
            else {
                marker.dragging.disable();
            }
        }
    }
}
//# sourceMappingURL=Marker.js.map