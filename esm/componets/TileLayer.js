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
import { TileLayer as LeafletTileLayer } from 'leaflet';
import { Layer } from './Layer';
export class TileLayer extends Layer {
    constructor() {
        super(...arguments);
        this.createLayer = (props) => {
            const { url } = props, options = __rest(props, ["url"]);
            return new LeafletTileLayer(url, options);
        };
        this.updateLayer = (layer, props, prevProps) => {
            // eslint-disable-next-line eqeqeq
            if (props.url != null && props.url !== prevProps.url) {
                layer.setUrl(props.url);
            }
        };
    }
}
//# sourceMappingURL=TileLayer.js.map