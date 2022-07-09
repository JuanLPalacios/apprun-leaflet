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
import { Map as LeafletMap, } from 'leaflet';
import { app, Component } from 'apprun';
export class Map extends Component {
    constructor() {
        super(...arguments);
        this.view = (state = this.state) => {
            const context = this.map;
            const { bounds, boundsOptions, center, children, className, id, placeholder, style, whenReady, zoom } = state, options = __rest(state, ["bounds", "boundsOptions", "center", "children", "className", "id", "placeholder", "style", "whenReady", "zoom"]);
            const contents = context ? (children === null || children === void 0 ? void 0 : children.map(node => typeof node === 'string' ?
                node :
                (node.tag.prototype instanceof Component ? Object.assign(Object.assign({}, node), { props: Object.assign(Object.assign({}, node.props), { context }) }) : node))) : (placeholder !== null && placeholder !== void 0 ? placeholder : null);
            const node = this.conainer;
            return app.createElement("div", null,
                node || app.createElement("div", Object.assign({}, { style, id, className }, { ref: (node) => {
                        if (node) {
                            this.conainer = node;
                        }
                        const context = this.map;
                        if (node !== null && !context) {
                            const { style, id, className } = node;
                            const map = new LeafletMap(node, options);
                            //const map = new LeafletMap('map').setView([51.505, -0.09], 13);
                            // eslint-disable-next-line eqeqeq
                            if (center != null && zoom != null) {
                                map.setView(center, zoom);
                                // eslint-disable-next-line eqeqeq
                            }
                            else if (bounds != null) {
                                map.fitBounds(bounds, boundsOptions);
                            }
                            // eslint-disable-next-line eqeqeq
                            if (whenReady != null) {
                                map.whenReady(whenReady);
                            }
                            this.run('setContext', map, { style, id, className });
                        }
                    } })),
                contents);
        };
        this.update = {
            'setContext': (state, map) => {
                this.map = map;
                return state;
            }
        };
        this.mounted = (props, children, state) => {
            return Object.assign(Object.assign(Object.assign({}, state), props), { children });
        };
    }
}
//# sourceMappingURL=Map.js.map