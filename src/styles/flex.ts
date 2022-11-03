import { FlexOptions } from "../interfaces.js";

/**
 * Set the flex-direction property.
 * @param {'row' | 'row-reverse' | 'column' | 'column-reverse'} direction direction of the flex container
 */
export function flexDirection(direction:'row' | 'row-reverse' | 'column' | 'column-reverse') {
    return {"flex-direction": direction}
}

/**
 * Set how flex should handle wrapping.
 * @param {'wrap' | 'nowrap' | 'wrap-reverse'} wrap Wrap option
 */
export function flexWrap(wrap:'wrap' | 'nowrap' | 'wrap-reverse') {
    return {"flex-wrap": wrap}
}

/**
 * Made an element a Flex element. With this you can set a bunch of flex properties in one go.
 * @param {'row' | 'row-reverse' | 'column' | 'column-reverse'} direction The direction of the flex container
 * @param {'nowrap' | 'wrap' | 'wrap-reverse'} wrap How the flex container should handle wrapping
 * @param {number} grow The flex-grow property
 * @param {number} shrink The flex-shrink property
 * @param {number} basis The flex-basis property
 * @param {'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'} alignContent How to align the content in the flex container
 * @param {'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'} justify How to justify the content in the flex container
 * @param {'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'} alignItems How to align the items in the flex container
 */
export function flex(opts:Partial<FlexOptions>) {
    let out = {'display': 'flex'};
    if(opts.direction) out['flex-direction'] = opts.direction;
    if(opts.wrap) out['flex-wrap'] = opts.wrap;
    if(opts.grow) out['flex-grow'] = opts.grow;
    if(opts.shrink) out['flex-shrink'] = opts.shrink;
    if(opts.basis) out['flex-basis'] = opts.basis;
    if(opts.alignContent) out['align-content'] = opts.alignContent;
    if(opts.justify) out['justify-content'] = opts.justify;
    if(opts.alignItems) out['align-items'] = opts.alignItems;

    return out
}

export default {
    flexDirection,
    flexWrap
}