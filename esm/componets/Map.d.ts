import { Map as LeafletMap, FitBoundsOptions, LatLngBoundsExpression, MapOptions } from 'leaflet';
import { Component, VNode } from 'apprun';
export interface MapContainerProps extends MapOptions {
    bounds?: LatLngBoundsExpression;
    boundsOptions?: FitBoundsOptions;
    children?: Array<VNode | string>;
    className?: string;
    id?: string;
    placeholder?: VNode | string;
    style?: any;
    whenReady?: () => void;
}
export declare class Map extends Component<MapContainerProps> {
    map: LeafletMap;
    conainer: HTMLDivElement;
    view: (state?: MapContainerProps) => any;
    update: {
        setContext: (state: any, map: any) => any;
    };
    mounted: (props: MapContainerProps, children: any[], state: MapContainerProps) => {
        children: any[];
        bounds?: LatLngBoundsExpression;
        boundsOptions?: FitBoundsOptions;
        className?: string;
        id?: string;
        placeholder?: string | VNode;
        style?: any;
        whenReady?: () => void;
        preferCanvas?: boolean;
        attributionControl?: boolean;
        zoomControl?: boolean;
        closePopupOnClick?: boolean;
        zoomSnap?: number;
        zoomDelta?: number;
        trackResize?: boolean;
        boxZoom?: boolean;
        doubleClickZoom?: import("leaflet").Zoom;
        dragging?: boolean;
        crs?: import("leaflet").CRS;
        center?: import("leaflet").LatLngExpression;
        zoom?: number;
        minZoom?: number;
        maxZoom?: number;
        layers?: import("leaflet").Layer[];
        maxBounds?: LatLngBoundsExpression;
        renderer?: import("leaflet").Renderer;
        fadeAnimation?: boolean;
        markerZoomAnimation?: boolean;
        transform3DLimit?: number;
        zoomAnimation?: boolean;
        zoomAnimationThreshold?: number;
        inertia?: boolean;
        inertiaDeceleration?: number;
        inertiaMaxSpeed?: number;
        easeLinearity?: number;
        worldCopyJump?: boolean;
        maxBoundsViscosity?: number;
        keyboard?: boolean;
        keyboardPanDelta?: number;
        scrollWheelZoom?: import("leaflet").Zoom;
        wheelDebounceTime?: number;
        wheelPxPerZoomLevel?: number;
        tap?: boolean;
        tapTolerance?: number;
        touchZoom?: import("leaflet").Zoom;
        bounceAtZoomLimits?: boolean;
    };
}
