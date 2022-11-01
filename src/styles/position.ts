import { UnitValue } from "interfaces.js";
import { unit } from "../util.js";

export function position(value: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky') {
    return { position: value };
}

/**
 * Left position of an element.
 * @param val The value for the left position.
 */
export function left(val:UnitValue) {
    return { left: `${val.v}${val.u}` };
}

/**
 * Left position of an element.
 * @param val The value for the left position.
 */
export function right(val:UnitValue) {
    return { right: `${val.v}${val.u}` };
}

/**
 * Left position of an element.
 * @param val The value for the left position.
 */
export function top(val:UnitValue) {
    return { top: `${val.v}${val.u}` };
}

/**
 * Left position of an element.
 * @param val The value for the left position.
 */
export function bottom(val:UnitValue) {
    return { bottom: `${val.v}${val.u}` };
}

/**
 * Set the z-index of an element.
 * @param value The index of this element
 */
export function zIndex(value:number) {
    return { 'z-index': value };
}