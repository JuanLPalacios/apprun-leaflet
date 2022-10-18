import { Tooltip as LeafletTooltip, } from 'leaflet';
import { Container } from '../abstracts/Container';
export class Tooltip extends Container {
    constructor() {
        super(...arguments);
        this.contentRendered = (tooltip, props, contents) => {
            tooltip.setContent(contents);
        };
    }
    createLayer(props) {
        const tooltip = new LeafletTooltip(props);
        props.context.bindTooltip(tooltip);
        return tooltip;
    }
    updateLayer(tooltip, props, prevProps) {
        if (props.position != null && props.position !== prevProps.position) {
            tooltip.setLatLng(props.position);
        }
    }
}
//# sourceMappingURL=Tooltip.js.map