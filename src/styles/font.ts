import { FontOptions, UnitValue } from "../interfaces.js";

/**
 * Set the font settings on an element
 * @param {UnitValue} size The size of the font
 * @param {string} family The font family
 * @param {'normal' | 'bold' | 'bolder' | 'lighter' | number} weight The font weight
 * @param {'normal' | 'italic' | 'oblique'} style The font style
 * @param {'normal' | 'small-caps'} variant The font variant
 */
export function font(opts:FontOptions) {
    let out = {};
    if(opts.size) out['font-size'] = `${opts.size.v}${opts.size.u}`;
    if(opts.family) out['font-family'] = `'${opts.family}'`;
    if(opts.weight) out['font-weight'] = opts.weight;
    if(opts.style) out['font-style'] = opts.style;
    if(opts.variant) out['font-variant'] = opts.variant;
    
    return out;
}

/**
 * Set the line height of an element
 * @param {UnitValue} val The line height
 */
export function lineHeight(val:UnitValue) {
    return { 'line-height': `${val.v}${val.u}` };
}