import {
  Map as LeafletMap,
  FitBoundsOptions,
  LatLngBoundsExpression,
  MapOptions,
} from 'leaflet';
import { app ,Component, VNode } from 'apprun';

export interface MapContainerProps extends MapOptions {
  bounds?: LatLngBoundsExpression
  boundsOptions?: FitBoundsOptions
  children?: Array<VNode | string>
  className?: string
  id?: string
  placeholder?: VNode | string
  style?: any
  whenReady?: () => void
}

export class Map extends Component<MapContainerProps> {
  map:LeafletMap;
  conainer:HTMLDivElement;

  view = (state = this.state) => {
    const context = this.map;
    const {
      bounds,
      boundsOptions,
      center,
      children,
      className,
      id,
      placeholder,
      style,
      whenReady,
      zoom,
      ...options
    } = state;
    const contents = context ? (
      children?.map(node=>
        typeof node === 'string'?
          node :
          (
            (node.tag as any).prototype instanceof Component? { ...node, props:{ ...node.props ,context } } : node
          )
      )
    ) : (
      placeholder ?? null
    );
    const node = this.conainer;
    return <div>
      {node || <div {...{ style, id, className }} ref={(node: HTMLDivElement | null) => {
        if(node) { this.conainer = node; }
        const context = this.map;
        if (node !== null && !context) {
          const { style, id, className } = node;
          const map = new LeafletMap(node, options);
          //const map = new LeafletMap('map').setView([51.505, -0.09], 13);
          // eslint-disable-next-line eqeqeq
          if (center != null && zoom != null) {
            map.setView(center, zoom);
            // eslint-disable-next-line eqeqeq
          } else if (bounds != null) {
            map.fitBounds(bounds, boundsOptions);
          }
          // eslint-disable-next-line eqeqeq
          if (whenReady != null) {
            map.whenReady(whenReady);
          }
          this.run('setContext', map, { style, id, className });
        }
      }}/>}
      {contents}
    </div>;
  };

  update = {
    'setContext': (state, map) => {
      this.map = map;
      return state;
    }
  };

  mounted = (props: MapContainerProps, children: any[], state: MapContainerProps) => {
    return { ...state, ...props, children };
  };
}