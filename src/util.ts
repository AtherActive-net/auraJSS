import { UnitValue, UnitValueGrid, UnitValueRotation } from "./interfaces.js"
import {StyleSheet} from "./stylesheet.js"

export type unit = 'px'|'em'|'rem'|'vh'|'vw'|'vmin'|'vmax'|'%'|'s'|''
export type unitGrid = 'px'|'em'|'rem'|'vh'|'vw'|'vmin'|'vmax'|'%'|'fr'|'s'|''
export type unitRotation = 'deg'|'grad'|'rad'|'turn'|''

/**
 * Include another stylesheet inside a stylesheet.
 * @param {StyleSheet} sheet The stylesheet to include
 */
export function include(sheet:StyleSheet) {
    return {'include': sheet}
}

/**
 * Create a UnitValue object with the unit of `rem`.
 * @param {number} value The value that should be paired with the unit
 */
export function rem(value:number): UnitValue {
    return {u:'rem', v:value}
}

/**
 * Create a UnitValue object with the unit of `rem`.
 * @param {number} value The value that should be paired with the unit
 */
export function px(value:number): UnitValue {
    return {u:'px', v:value}
}

/**
 * Create a UnitValue object with the unit of `em`.
 * @param {number} value The value that should be paired with the unit
 */
export function em(value:number): UnitValue {
    return {u:'em', v:value}
}

/**
 * Create a UnitValue object with the unit of `vh`.
 * @param {number} value The value that should be paired with the unit
 */
export function vh(value:number): UnitValue {
    return {u:'vh', v:value}
}

/**
 * Create a UnitValue object with the unit of `vw`.
 * @param {number} value The value that should be paired with the unit
 */
export function vw(value:number): UnitValue {
    return {u:'vw', v:value}
}

/**
 * Create a UnitValue object with the unit of `vmin`.
 * @param {number} value The value that should be paired with the unit
 */
export function vmin(value:number): UnitValue {
    return {u:'vmin', v:value}
}

/**
 * Create a UnitValue object with the unit of `vmax`.a
 * @param {number} value The value that should be paired with the unit
 */
export function vmax(value:number): UnitValue {
    return {u:'vmax', v:value}
}

/**
 * Create a UnitValue object with the unit of `%`.
 * @param {number} value The value that should be paired with the unit
 */
export function percent(value:number): UnitValue {
    return {u:'%', v:value}
}

/**
 * Create a UnitValue object with the unit of `s`.
 * @param {number} value The value that should be paired with the unit
 */
export function s(value:number): UnitValue {
    return {u:'s', v:value}
}

/**
 * Create a UnitValue object with the unit of `fr`.
 * @param {number} value The value that should be paired with the unit
 */
export function fr(value:number): UnitValueGrid {
    return {u:'fr', v:value}
}

/**
 * Create a UnitValueRotation object with the unit of `deg`.
 * @param {number} value The value that should be paired with the unit
*/
export function deg(value:number): UnitValueRotation {
    return {u:'deg', v:value}
}

/**
 * Create a UnitValueRotation object with the unit of `grad`.
 * @param {number} value The value that should be paired with the unit
*/
export function grad(value:number): UnitValueRotation {
    return {u:'grad', v:value}
}

/**
 * Create a UnitValueRotation object with the unit of `rad`.
 * @param {number} value The value that should be paired with the unit
*/
export function rad(value:number): UnitValueRotation {
    return {u:'rad', v:value}
}

/**
 * Create a UnitValueRotation object with the unit of `turn`.
 * @param {number} value The value that should be paired with the unit
*/
export function turn(value:number): UnitValueRotation {
    return {u:'turn', v:value}
}

/**
 * Allows the use of a SCSS variable in a stylesheet.
 * Please note that this does mean that type checking is lost when using this function.
 * This will be done by the SCSS compiler instead.
 * @param {string} name The name of the variable
 */
export function scssVar(name:string):any {
    return `$${name}`
}