import { BorderRadius, UnitValue } from "interfaces.js";
import { unit } from "../util.js";
import { RGB } from "./color";
/**
 * Create a new Border.
 * @param {UnitValue} value Border width
 * @param {'solid' | 'dashed' | 'dotted'} style What kind of border? Solid, dashed, dotted
 * @param {RGB | RGBA} color What color should the border be?
 */
 export function border(value:UnitValue, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border": `${value.v}${value.u} ${style} ${color}` };
}

/**
 * Create a new Bottom Border.
 * @param value Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
 */
export function borderBottom(value:UnitValue, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-bottom": `${value.v}${value.u} ${style} ${color}` };
}

/**
 * Create a new Top Border.
 * @param {UnitValue} value Border width
 * @param {'solid' | 'dashed' | 'dotted'} style What kind of border? Solid, dashed, dotted
 * @param {RGB | RGBA} color What color should the border be?
*/
export function borderTop(value:UnitValue, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-top": `${value.v}${value.u} ${style} ${color}` };
}

/**
 * Create a new Left Border.
 * @param {UnitValue} value Border width
 * @param {'solid' | 'dashed' | 'dotted'} style What kind of border? Solid, dashed, dotted
 * @param {RGB | RGBA} color What color should the border be?
*/
export function borderLeft(value:UnitValue, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-left": `${value.v}${value.u} ${style} ${color}` };
}

/**
 * Create a new Right Border.
 * @param {UnitValue} value Border width
 * @param {'solid' | 'dashed' | 'dotted'} style What kind of border? Solid, dashed, dotted
 * @param {RGB | RGBA} color What color should the border be?
*/
export function borderRight(value:UnitValue, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-right": `${value.v}${value.u} ${style} ${color}` };
}

/**
 * Set whether table borders should collapse into a single border or be separated as in standard HTML.
 * @param {'collapse' | 'separate' | 'inherit'} value The value of this property
 */
export function borderCollapse(value:'collapse' | 'separate' | 'inherit') {
    return {'border-collapse': value}
}

/**
 * Set an image as border
 * @param {string} source The source of the image
 * @param {number} slice How should the image be sliced?
 * @param {number} width How wide the border image should be
 * @param {number} outset How far the border image should be from the border
 * @param {'stretch' | 'repeat' | 'round' | 'space'} repeat Specify how/if the image should be repeated
 */
export function borderImage(source?:string, slice?:number, width?:number, outset?:number, repeat?:'stretch' | 'repeat' | 'round' | 'space') {
    return {'border-image': `${source} ${slice} ${width} ${outset} ${repeat}`}
}

/**
 * Apply a radius to the border
 * @param {UnitValue} all The radius of all corners
 * @param {UnitValue} topLeft The radius of the top corners
 * @param {UnitValue} topRight The radius of the top right corner
 * @param {UnitValue} bottomLeft The radius of the bottom left corner
 * @param {UnitValue} bottomRight The radius of the bottom right corner
 */
export function borderRadius(opts:BorderRadius) {
    if(opts.all) return {'border-radius': `${opts.all.v}${opts.all.u}`}
    
    let out = {}
    if(opts.topLeft) out['border-top-left-radius'] = `${opts.topLeft.v}${opts.topLeft.u}`
    if(opts.topRight) out['border-top-right-radius'] = `${opts.topRight.v}${opts.topRight.u}`
    if(opts.bottomLeft) out['border-bottom-left-radius'] = `${opts.bottomLeft.v}${opts.bottomLeft.u}`
    if(opts.bottomRight) out['border-bottom-right-radius'] = `${opts.bottomRight.v}${opts.bottomRight.u}`
    return out
}