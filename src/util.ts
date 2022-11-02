import { UnitValue, UnitValueGrid, UnitValueRotation } from "interfaces"
import StyleSheet from "stylesheet"

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
 * @param value The value that should be paired with the unit
 */
export function rem(value:number): UnitValue {
    return {u:'rem', v:value}
}

/**
 * Create a UnitValue object with the unit of `rem`.
 * @param value The value that should be paired with the unit
 */
export function px(value:number): UnitValue {
    return {u:'px', v:value}
}

/**
 * Create a UnitValue object with the unit of `em`.
 * @param value The value that should be paired with the unit
 */
export function em(value:number): UnitValue {
    return {u:'em', v:value}
}

/**
 * Create a UnitValue object with the unit of `vh`.
 * @param value The value that should be paired with the unit
 */
export function vh(value:number): UnitValue {
    return {u:'vh', v:value}
}

/**
 * Create a UnitValue object with the unit of `vw`.
 * @param value The value that should be paired with the unit
 */
export function vw(value:number): UnitValue {
    return {u:'vw', v:value}
}

/**
 * Create a UnitValue object with the unit of `vmin`.
 * @param value The value that should be paired with the unit
 */
export function vmin(value:number): UnitValue {
    return {u:'vmin', v:value}
}

/**
 * Create a UnitValue object with the unit of `vmax`.a
 * @param value The value that should be paired with the unit
 */
export function vmax(value:number): UnitValue {
    return {u:'vmax', v:value}
}

/**
 * Create a UnitValue object with the unit of `%`.
 * @param value The value that should be paired with the unit
 */
export function percent(value:number): UnitValue {
    return {u:'%', v:value}
}

/**
 * Create a UnitValue object with the unit of `s`.
 * @param value The value that should be paired with the unit
 */
export function s(value:number): UnitValue {
    return {u:'s', v:value}
}

/**
 * Create a UnitValue object with the unit of `fr`.
 * @param value The value that should be paired with the unit
 */
export function fr(value:number): UnitValueGrid {
    return {u:'fr', v:value}
}

/**
 * Create a UnitValueRotation object with the unit of `deg`.
 * @param value The value that should be paired with the unit
*/
export function deg(value:number): UnitValueRotation {
    return {u:'deg', v:value}
}

/**
 * Create a UnitValueRotation object with the unit of `grad`.
 * @param value The value that should be paired with the unit
*/
export function grad(value:number): UnitValueRotation {
    return {u:'grad', v:value}
}

/**
 * Create a UnitValueRotation object with the unit of `rad`.
 * @param value The value that should be paired with the unit
*/
export function rad(value:number): UnitValueRotation {
    return {u:'rad', v:value}
}

/**
 * Create a UnitValueRotation object with the unit of `turn`.
 * @param value The value that should be paired with the unit
*/
export function turn(value:number): UnitValueRotation {
    return {u:'turn', v:value}
}