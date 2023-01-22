import { Text } from "interfaces";

export function text(opts:Partial<Text>) {
    let out = {};
    if(opts.align) out['text-align'] = opts.align;
    if(opts.indent) out['text-indent'] = `${opts.indent.v}${opts.indent.u}`;
    if(opts.transform) out['text-transform'] = opts.transform;
    if(opts.orientation) out['text-orientation'] = opts.orientation;

    if(opts.decoration && typeof opts.decoration === "object") {
        if(opts.decoration.color) out['text-decoration-color'] = opts.decoration.color;
        if(opts.decoration.line) out['text-decoration-line'] = opts.decoration.line;
        if(opts.decoration.style) out['text-decoration-style'] = opts.decoration.style;

    } else if(typeof opts.decoration === "string") out['text-decoration'] = opts.decoration;

    if(opts.emphasis) {
        if(opts.emphasis.color) out['text-emphasis-color'] = opts.emphasis.color;
        if(opts.emphasis.style) out['text-emphasis-style'] = opts.emphasis.style;
    }
    return out;
}