import { FlexOptions } from "../interfaces.js";

/**
 * Set the flex-direction property.
 * @param direction direction of the flex container
 */
export function flexDirection(direction:'row' | 'row-reverse' | 'column' | 'column-reverse') {
    return {"flex-direction": direction}
}

/**
 * Set how flex should handle wrapping.
 * @param wrap Wrap option
 */
export function flexWrap(wrap:'wrap' | 'nowrap' | 'wrap-reverse') {
    return {"flex-wrap": wrap}
}

/**
 * Made an element a Flex element. With this you can set a bunch of flex properties in one go.
 * @param direction The direction of the flex container
 * @param wrap How the flex container should handle wrapping
 * @param grow The flex-grow property
 * @param shrink The flex-shrink property
 * @param basis The flex-basis property
 * @param alignContent How to align the content in the flex container
 * @param justify How to justify the content in the flex container
 * @param alignItems How to align the items in the flex container
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