import { unit } from "./util.js";
import { RGB } from "./color.js";
/**
 * Apply a radius to the border
 * @param radius Radius of the border
 */
export function borderRadius(unit: unit,radius: number) {
    return { "border-radius": `${radius}${unit}` };
}

/**
 * Create a new Border.
 * @param unit Unit of measurement (px,em,rem)
 * @param width Border width
 * @param style What kind of border? Solid, dashed, dotted
 * @param color What color should the border be?
 * @returns 
 */
export function border(unit:unit,width: number, style?: 'solid' | 'dashed' | 'dotted', color?: RGB) {
    return { "border": `${width}${unit} ${style} ${color}` };
}