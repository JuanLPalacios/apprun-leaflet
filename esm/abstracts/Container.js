import app, { Component } from 'apprun';
export class Container extends Component {
    constructor(props, ...p) {
        super(props, ...p);
        this.view = (state = this.state) => {
            var _a;
            const context = this.context;
            if (!Array.isArray(state.children))
                state.children = [state.children];
            state.children = (_a = state.children) === null || _a === void 0 ? void 0 : _a.map(node => typeof node === 'string' ?
                node : (node.tag.prototype instanceof Component ? Object.assign(Object.assign({}, node), { props: Object.assign(Object.assign({}, node.props), { context }) }) : node));
            return app.createElement("div", { ref: (node) => this.contentRendered(context, state, node) }, state.children);
        };
        this.mounted = (props, children, state) => {
            this.updateLayer(this.context, props, state);
            this.context.on('popupopen', () => {
                var _a, _b;
                return (_b = (_a = this.context._popup) === null || _a === void 0 ? void 0 : _a._closeButton) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (event) => {
                    event.preventDefault();
                });
            });
            return Object.assign(Object.assign({}, props), { children });
        };
        this.contentRendered = () => { };
        this.context = this.createLayer(props).on(props.eventHandlers || {});
    }
}
//# sourceMappingURL=Container.js.map