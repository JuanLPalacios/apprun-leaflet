import {
  LatLngExpression,
  Tooltip as LeafletTooltip,
  TooltipOptions,
} from 'leaflet';
import app, { Component, VNode } from 'apprun';
import { EventedProps } from '../types/EventedProps';
import { ContextBased } from '../types/ContextBased';

export interface TooltipProps extends TooltipOptions, EventedProps, ContextBased<{}> {
  children?: VNode[]
  position?: LatLngExpression
}

export class Tooltip extends Component<TooltipProps> {
  popup:LeafletTooltip;

  view = (state = this.state) => {
    const { context:container } = state;
    if ((!this.popup) ) {
      if(this.popup) {this.popup.remove();}
      container.bindTooltip("");
      this.popup = container.getTooltip();
    }
    const tooltip = this.popup;
    const context = this.popup;
    state.children = state.children?.map(node=>
      (typeof node) === 'string'?
        node :(
          (node.tag as any).prototype instanceof Component? { ...node, props:{ ...node.props ,context } } : node
        )
    );
    return (Array.isArray(state.children) && (state.children.length > 1))?
    <div ref={(node) => {console.log(node);tooltip.setContent(node)}} >
      {state.children}
    </div> : 
    (typeof state.children[0] === 'string'?
      (()=>{
        ((node)=>{console.log(node);tooltip.setContent(node)})(state.children[0] as any as string);
        return <>{state.children}</>
      })():
      {...state.children[0], props:{...state.children[0].props, ref:(node)=>{console.log(node);tooltip.setContent(node)}}}
    )
  };

  mounted = (props: ContextBased<TooltipProps>, children: any[], state: ContextBased<TooltipProps>) => {
    const { context } = state;
    if ( (props.context !== state.context) || (!this.popup) ) {
      if(this.popup) {this.popup.remove();}
      context.bindTooltip("");
      this.popup = context.getTooltip();
    }
    if (props.position != null && props.position !== state.position) {
      this.popup.setLatLng(props.position);
    }
    return { ...props, children };
  };
}