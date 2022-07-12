import { LatLngExpression, Marker as LeafletMarker, MarkerOptions } from 'leaflet';
import { Component, VNode } from 'apprun';
import { EventedProps } from '../types/EventedProps';
import { ContextBased } from '../types/ContextBased';
export interface MarkerProps extends MarkerOptions, EventedProps {
    children?: VNode[];
    position: LatLngExpression;
}
export declare class Marker extends Component<MarkerProps> {
    marker: LeafletMarker;
    constructor(props: ContextBased<MarkerProps>, ...p: any[]);
    view: (state?: MarkerProps) => any;
    mounted: (props: ContextBased<MarkerProps>, children: any[], state: ContextBased<MarkerProps>) => {
        children: any[];
        position: LatLngExpression;
        icon?: import("leaflet").Icon<import("leaflet").IconOptions> | import("leaflet").DivIcon;
        draggable?: boolean;
        keyboard?: boolean;
        title?: string;
        alt?: string;
        zIndexOffset?: number;
        opacity?: number;
        riseOnHover?: boolean;
        riseOffset?: number;
        shadowPane?: string;
        autoPan?: boolean;
        autoPanPadding?: import("leaflet").PointExpression;
        autoPanSpeed?: number;
        interactive?: boolean;
        bubblingMouseEvents?: boolean;
        pane?: string;
        attribution?: string;
        eventHandlers?: import("leaflet").LeafletEventHandlerFnMap;
        context?: any;
    };
    updateMarker(marker: any, props: any, prevProps: any): void;
}
