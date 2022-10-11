import {
  Map as LeafletMap,
  FitBoundsOptions,
  LatLngBoundsExpression,
  MapOptions,
} from 'leaflet';
import { app ,Component, VNode } from 'apprun';
import { EventedProps } from '../apprun-leaflet';

export interface MapContainerProps extends MapOptions, EventedProps {
  bounds?: LatLngBoundsExpression
  boundsOptions?: FitBoundsOptions
  children?: Array<VNode | string>
  class?: string
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
      class:_class,
      className,
      id,
      placeholder,
      style,
      whenReady,
      zoom
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
    return <>
      {node || <div {...{ style, id, className, class:_class }} ref={(node: HTMLDivElement | null) => {
        if(node) { this.conainer = node; }
        const context = this.map;
        if (node !== null && !context) {
          const map = new LeafletMap(node, state);
          if(state.eventHandlers) map.on(state.eventHandlers);
          map.on('popupopen', () =>
            (map as any)._popup?._closeButton?.addEventListener('click', (event) => {
              event.preventDefault();
            }));
          if (center != null && zoom != null) {
            map.setView(center, zoom);
          } else if (bounds != null) {
            map.fitBounds(bounds, boundsOptions);
          }
          if (whenReady != null) {
            map.whenReady(whenReady);
          }
          this.run('setContext', map);
        }
      }}/>}
      <div style={{display:'none'}}>
        {contents}
      </div>
    </>;
  };

  update = {
    'setContext': (state, map) => {
      this.map = map;
      return state;
    }
  };

  mounted = (props: MapContainerProps, children: any[], state: MapContainerProps) => {
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
    return { ...state, ...props, children };
  };
  
  unload = (state: MapContainerProps) => {
    delete state.center;
    delete state.zoom;
    delete state.bounds;
    this.setState({...state});
  };
}