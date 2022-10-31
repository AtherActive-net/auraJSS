import { FontOptions } from "../interfaces.js";

/**
 * Set the font settings on an element
 * @param size The size of the font
 * @param family The font family
 * @param weight The font weight
 * @param style The font style
 * @param variant The font variant
 */
export function font(opts:FontOptions) {
    let out = {};
    if(opts.size) out['font-size'] = opts.size;
    if(opts.family) out['font-family'] = opts.family;
    if(opts.weight) out['font-weight'] = opts.weight;
    if(opts.style) out['font-style'] = opts.style;
    if(opts.variant) out['font-variant'] = opts.variant;
    
    return out;
}