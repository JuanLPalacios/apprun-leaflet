import { LatLngTuple, Layer, Map, Popup as PopupMarker, PopupOptions } from 'leaflet';
import { EventedProps } from '../types/EventedProps';
import { ContextBased } from '../types/ContextBased';
import { Container, ContainerProps } from '../abstracts/Container';
export interface PopupProps extends PopupOptions, EventedProps, ContextBased<{}>, ContainerProps {
    position?: LatLngTuple;
}
export declare class Popup extends Container<PopupMarker, PopupProps, Layer | Map> {
    createLayer(props: ContextBased<PopupProps, any>): PopupMarker;
    updateLayer(popup: PopupMarker, props: ContextBased<PopupProps, any>, prevProps: ContextBased<PopupProps, any>): void;
    contentRendered: (popup: PopupMarker, props: ContextBased<PopupProps, any>, contents: HTMLElement) => void;
}
