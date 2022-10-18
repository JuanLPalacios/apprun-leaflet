import { Map as LeafletMap, } from 'leaflet';
import { app, Component } from 'apprun';
export class Map extends Component {
    constructor() {
        super(...arguments);
        this.view = (state = this.state) => {
            const context = this.map;
            const { bounds, boundsOptions, center, children, class: _class, className, id, placeholder, style, whenReady, zoom } = state;
            const contents = context ? (children === null || children === void 0 ? void 0 : children.map(node => typeof node === 'string' ?
                node :
                (node.tag.prototype instanceof Component ? Object.assign(Object.assign({}, node), { props: Object.assign(Object.assign({}, node.props), { context }) }) : node))) : (placeholder !== null && placeholder !== void 0 ? placeholder : null);
            const node = this.conainer;
            return app.createElement(app.Fragment, null,
                node || app.createElement("div", Object.assign({}, { style, id, className, class: _class }, { ref: (node) => {
                        if (node) {
                            this.conainer = node;
                        }
                        const context = this.map;
                        if (node !== null && !context) {
                            const map = new LeafletMap(node, state);
                            if (state.eventHandlers)
                                map.on(state.eventHandlers);
                            map.on('popupopen', () => {
                                var _a, _b;
                                return (_b = (_a = map._popup) === null || _a === void 0 ? void 0 : _a._closeButton) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (event) => {
                                    event.preventDefault();
                                });
                            });
                            if (center != null && zoom != null) {
                                map.setView(center, zoom);
                            }
                            else if (bounds != null) {
                                map.fitBounds(bounds, boundsOptions);
                            }
                            if (whenReady != null) {
                                map.whenReady(whenReady);
                            }
                            this.run('setContext', map);
                        }
                    } })),
                app.createElement("div", { style: { display: 'none' } }, contents));
        };
        this.update = {
            'setContext': (state, map) => {
                this.map = map;
                return state;
            }
        };
        this.mounted = (props, children, state) => {
            const map = this.map;
            if (props.center != null && props.center !== state.center) {
                map.setView(props.center);
            }
            if (props.zoom != null && props.zoom !== state.zoom) {
                map.setZoom(props.zoom);
            }
            if (props.bounds != null && props.bounds !== state.bounds) {
                map.fitBounds(props.bounds);
            }
            if (props.whenReady != null) {
                map.whenReady(props.whenReady);
            }
            return Object.assign(Object.assign(Object.assign({}, state), props), { children });
        };
        this.unload = (state) => {
            delete state.center;
            delete state.zoom;
            delete state.bounds;
            this.setState(Object.assign({}, state));
        };
    }
}
//# sourceMappingURL=Map.js.map