var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/* eslint-disable eqeqeq */
import { Marker as LeafletMarker, } from 'leaflet';
import app, { Component } from 'apprun';
export class Marker extends Component {
    constructor(props, ...p) {
        super(props, ...p);
        this.view = (state = this.state) => {
            return app.createElement("div", null, state.children);
        };
        this.mounted = (props, children, state) => {
            var _a;
            const { context } = state;
            state.children = (_a = state.children) === null || _a === void 0 ? void 0 : _a.map(node => node.tag.prototype instanceof Component ? Object.assign(Object.assign({}, node), { props: Object.assign(Object.assign({}, node.props), { context }) }) : node);
            this.updateMarker(this.marker, props, state);
            return Object.assign(Object.assign({}, props), { children });
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { position, children } = props, options = __rest(props, ["position", "children"]);
        this.marker = new LeafletMarker(position, options);
        if (props.context) {
            this.marker.addTo(props.context);
        }
    }
    updateMarker(marker, props, prevProps) {
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