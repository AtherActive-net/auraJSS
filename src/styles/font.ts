import { FontOptions } from "../interfaces.js";

export function font(opts:FontOptions) {
    let out = {};
    if(opts.size) out['font-size'] = opts.size;
    if(opts.family) out['font-family'] = opts.family;
    if(opts.weight) out['font-weight'] = opts.weight;
    if(opts.style) out['font-style'] = opts.style;
    if(opts.variant) out['font-variant'] = opts.variant;
    
    return out;
}