import { Component, VNode } from 'apprun';
import { Evented } from 'leaflet';
import { ContextBased } from '../types/ContextBased';
import { EventedProps } from '../types/EventedProps';
export interface ContainerProps extends EventedProps {
    children?: Array<VNode | string> | VNode | string;
}
export declare abstract class Container<T extends Evented, P extends ContainerProps, E = any> extends Component<P> {
    context?: T;
    state: ContextBased<P, E>;
    constructor(props: ContextBased<P>, ...p: any[]);
    view: (state?: ContextBased<P, E>) => any;
    mounted: (props: ContextBased<P>, children: any[], state: ContextBased<P>) => P & {
        children: any[];
        context?: any;
    };
    contentRendered: (layer: T, props: ContextBased<P>, contents: HTMLElement) => void;
    abstract createLayer(props: ContextBased<P>): T;
    abstract updateLayer(layer: T, props: ContextBased<P>, prevProps: ContextBased<P>): void;
}
