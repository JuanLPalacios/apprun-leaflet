import { Layer, Map, Popup as PopupMarker, } from 'leaflet';
import { Container } from '../abstracts/Container';
export class Popup extends Container {
    constructor() {
        super(...arguments);
        this.contentRendered = (popup, props, contents) => {
            popup.setContent(contents);
        };
    }
    createLayer(props) {
        const popup = new PopupMarker(props);
        const { context } = props;
        if (props.position)
            popup.setLatLng(props.position);
        if (context instanceof Layer) {
            context.bindPopup(popup);
        }
        else if (context instanceof Map) {
            popup.openOn(context);
        }
        return popup;
    }
    updateLayer(popup, props, prevProps) {
        if (props.position != null && props.position !== prevProps.position) {
            popup.setLatLng(props.position);
        }
        if (props.context && props.context instanceof Map) {
            popup.openOn(props.context);
        }
    }
}
//# sourceMappingURL=Popup.js.map