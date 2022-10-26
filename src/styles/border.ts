import { UnitValue } from "interfaces.js";
import { unit } from "../util.js";
import { RGB } from "./color";
/**
 * Create a new Border.
 * @param value Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
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
 * @param value Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
*/
export function borderTop(value:UnitValue, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-top": `${value.v}${value.u} ${style} ${color}` };
}

/**
 * Create a new Left Border.
 * @param value Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
*/
export function borderLeft(value:UnitValue, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-left": `${value.v}${value.u} ${style} ${color}` };
}

/**
 * Create a new Right Border.
 * @param value Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
*/
export function borderRight(value:UnitValue, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-right": `${value.v}${value.u} ${style} ${color}` };
}

/**
 * Set whether table borders should collapse into a single border or be separated as in standard HTML.
 * @param value The value of this property ('collapse' | 'separate' | 'inherit')
 * @returns 
 */
export function borderCollapse(value:'collapse' | 'separate' | 'inherit') {
    return {'border-collapse': value}
}

/**
 * Set an image as border
 * @param source The source of the image
 * @param slice How should the image be sliced?
 * @param width How wide the border image should be
 * @param outset How far the border image should be from the border
 * @param repeat Specify how/if the image should be repeated
 */
export function borderImage(source?:string, slice?:number, width?:number, outset?:number, repeat?:'stretch' | 'repeat' | 'round' | 'space') {
    return {'border-image': `${source} ${slice} ${width} ${outset} ${repeat}`}
}

/**
 * Apply a radius to the border
 * @param radius Radius of the border
 */
 export function borderRadius(value:UnitValue) {
    return { "border-radius": `${value.v}${value.u}` };
}