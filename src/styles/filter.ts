import { FunctionParamErorr } from "../error.js";
import { UnitValue, UnitValueGrid, UnitValueRotation } from "../interfaces.js";

/**
 * This functions checks if a UnitValue is only supplying a percentage. If it does not, throw an error.
 * @param val 
 */
function errorCheckUnit(val:UnitValue) {
     if(val.u != '%') throw new FunctionParamErorr('This function only support regular numbers and percentages.');
}

/**
 * Apply a filter to an element
 * @param {Array<Object>} filters Filters to apply. They are applied in the order they are given.
 */
export function filter(filters:Array<Object>) {
    return {'filter' : filters.join(' ')}
}

/**
 * [FILTER] Blur an element
 * @param val The amount to blur
 */
export function blur(val:UnitValue) {
    return `blur(${val.v}${val.u})`;
}

/**
 * [FILTER] Brightness of an element
 * @param {UnitValue | number} val The amount to brighten (or darken) the element. Note: UnitValue only supports percentages.
 */
export function brightness(val:UnitValue|number) {
    if(typeof val === 'number') return `brightness(${val})`;
    errorCheckUnit(val);
    return `brightness(${val.v}${val.u})`;
}

/**
 * [FILTER] Contrast of an element
 * @param {UnitValue | number} val The amount to increase (or decrease) the contrast of the element. Note: UnitValue only supports percentages.
 */
export function contrast(val:UnitValue|number) {
    if(typeof val === 'number') return `contrast(${val})`;
    errorCheckUnit(val);
    return `contrast(${val.v}${val.u})`;
}

/**
 * [FILTER] Grayscale an element
 * @param {UnitValue | number} val The amount to grayscale the element. Note: UnitValue only supports percentages.
 */
export function grayscale(val:UnitValue|number) {
    if(typeof val === 'number') return `grayscale(${val})`;
    errorCheckUnit(val);
    return `grayscale(${val.v}${val.u})`;
}

/**
 * [FILTER] Hue rotate an element
 * @param {UnitValueRotation} val The amount to rotate the hue of the element
 */
export function hueRotate(val:UnitValueRotation) {
    return `hue-rotate(${val.v}${val.u})`;
}

/**
 * [FILTER] Invert the color of an element
 * @param {UnitValue | number} val The amount to invert the color of the element. Note: UnitValue only supports percentages.
 */
export function invert(val:UnitValue|number) {
    if(typeof val === 'number') return `invert(${val})`;
    errorCheckUnit(val);
    return `invert(${val.v}${val.u})`;
}

/**
 * [FILTER] Opacity of an element
 * @param {UnitValue | number} val The amount to change the opacity of the element. Note: UnitValue only supports percentages.
 */
export function opacity(val:UnitValue|number) {
    if(typeof val === 'number') return `opacity(${val})`;
    errorCheckUnit(val);
    return `opacity(${val.v}${val.u})`;
}

/**
 * [FILTER] Saturation of an element
 * @param {UnitValue | number} val The amount to change the saturation of the element. Note: UnitValue only supports percentages.
 */
export function saturate(val:UnitValue|number) {
    if(typeof val === 'number') return `saturate(${val})`;
    errorCheckUnit(val);
    return `saturate(${val.v}${val.u})`;
}

/**
 * [FILTER] Sepia of an element
 * @param {UnitValue | number} val The amount to change the sepia of the element. Note: UnitValue only supports percentages.
 */
export function sepia(val:UnitValue|number) {
    if(typeof val === 'number') return `sepia(${val})`;
    errorCheckUnit(val);
    return `sepia(${val.v}${val.u})`;
}