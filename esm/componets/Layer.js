import app, { Component } from 'apprun';
import { Layer as LeafletLayer } from 'leaflet';
export class Layer extends Component {
    constructor(props, ...p) {
        super(props, ...p);
        this.view = (state = this.state) => {
            if (!this.layer) {
                this.layer = this.createLayer(state);
            }
            if (state.context) {
                this.layer.addTo(state.context);
            }
            return app.createElement("div", null, state.children);
        };
        this.mounted = (props, children, state) => {
            var _a;
            const context = this.layer;
            state.children = (_a = state.children) === null || _a === void 0 ? void 0 : _a.map(node => typeof node === 'string' ?
                node : (node.tag.prototype instanceof Component ? Object.assign(Object.assign({}, node), { props: Object.assign(Object.assign({}, node.props), { context }) }) : node));
            if (props.context !== state.context) {
                if (state.context) {
                    this.layer.remove();
                }
                this.layer.addTo(props.context);
            }
            this.updateLayer(this.layer, props, state);
            return Object.assign(Object.assign({}, props), { children });
        };
        this.createLayer = (props) => {
            return new LeafletLayer(props);
        };
        // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
        this.updateLayer = (layer, props, prevProps) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
}
//# sourceMappingURL=Layer.js.map