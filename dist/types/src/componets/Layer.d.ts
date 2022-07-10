import { Component, VNode } from 'apprun';
import { InteractiveLayerOptions, Layer as LeafletLayer, LayerOptions } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { EventedProps } from '../types/EventedProps';
export interface LayerProps extends EventedProps, LayerOptions {
    children?: Array<VNode | string>;
}
export interface InteractiveLayerProps extends LayerProps, InteractiveLayerOptions {
}
export declare class Layer<T extends LeafletLayer, E extends LayerProps> extends Component<E> {
    layer?: T;
    state: ContextBased<E>;
    constructor(props: ContextBased<E>, ...p: any[]);
    view: (state?: ContextBased<E>) => any;
    mounted: (props: ContextBased<E>, children: any[], state: ContextBased<E>) => E & {
        children: any[];
        context?: any;
    };
    createLayer: (props: ContextBased<E>) => T;
    updateLayer: (layer: T, props: ContextBased<E>, prevProps: ContextBased<E>) => void;
}
