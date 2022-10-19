import { unit } from "../util.js";
import { RGB } from "./color";
/**
 * Create a new Border.
 * @param unit Unit of measurement (px,em,rem)
 * @param width Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
 */
 export function border(unit:unit,width: number, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border": `${width}${unit} ${style} ${color}` };
}

/**
 * Create a new Bottom Border.
 * @param unit Unit of measurement (px,em,rem)
 * @param width Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
 */
export function borderBottom(unit:unit,width: number, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-bottom": `${width}${unit} ${style} ${color}` };
}

/**
 * Create a new Top Border.
 * @param unit Unit of measurement (px,em,rem)
 * @param width Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
*/
export function borderTop(unit:unit,width: number, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-top": `${width}${unit} ${style} ${color}` };
}

/**
 * Create a new Left Border.
 * @param unit Unit of measurement (px,em,rem)
 * @param width Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
*/
export function borderLeft(unit:unit,width: number, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-left": `${width}${unit} ${style} ${color}` };
}

/**
 * Create a new Right Border.
 * @param unit Unit of measurement (px,em,rem)
 * @param width Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
*/
export function borderRight(unit:unit,width: number, style: 'solid' | 'dashed' | 'dotted'='solid', color?: RGB) {
    return { "border-right": `${width}${unit} ${style} ${color}` };
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
 export function borderRadius(unit: unit,radius: number) {
    return { "border-radius": `${radius}${unit}` };
}