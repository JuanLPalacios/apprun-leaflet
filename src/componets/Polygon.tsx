import {
  LatLngExpression,
  LayerGroup,
  Map,
  Polygon as LeafletPolygon,
  PolylineOptions
} from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';

export interface PolygonProps extends PolylineOptions, ContainerProps {
  latlngs: LatLngExpression[]
}

export class Polygon extends Container<LeafletPolygon, PolygonProps, Map | LayerGroup> {
  createLayer(props: ContextBased<PolygonProps, any>): LeafletPolygon<any> {
    const { latlngs } = props;
    return new LeafletPolygon(latlngs, props).addTo(props.context);
  }
  updateLayer(poligon: LeafletPolygon<any>, props: ContextBased<PolygonProps, any>, prevProps: ContextBased<PolygonProps, any>): void {
    if (props.latlngs != null && props.latlngs !== prevProps.latlngs) {
      poligon.setLatLngs(props.latlngs);
    }
    poligon.setStyle({...prevProps, ...props});
  }
}