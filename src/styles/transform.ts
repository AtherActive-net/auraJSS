import { UnitValue } from "interfaces"

/**
 * Apply a 2d (or 3d) transform to an element.
 * @param {Object} transformFunction Here you can specify the transform function. For example: `rotate()`
 */
export function transform(transformFunction:Object) {
    return {transform: transformFunction}
}

/**
 * [TRANSFORM FUNCTION]
 * Translate an element
 * @param {UnitValue} x The x-axis translation
 * @param {UnitValue} y The y-axis translation
 * @param {UnitValue} z The z-axis translation. If left blank it will create a 2D translate.
 */
export function translate(x:UnitValue, y:UnitValue, z?:UnitValue) {
    if(z) return `translate3d(${x.v}${x.v}, ${y.v}${y.v}, ${z.v}${z.v})`
    return `translate(${x.v}${x.v}, ${y.v}${y.v})`
}

/**
 * [TRANSFORM FUNCTION]
 * Scale an element up/down.
 * @param {number} x The x-axis scale
 * @param {number} y The y-axis scale
 * @param {number} z The z-axis scale. If left blank it will create a 2D scale.
 */
export function scale(x:number, y:number, z?:number) {
    if(z) return `scale3d(${x}, ${y}, ${z})`
    return `scale(${x}, ${y})`
}

/**
 * [TRANSFORM FUNCTION]
 * Apply a rotation to an element.
 * @param {UnitValue} angle The angle of rotation
 */
export function rotate(angle:UnitValue) {
    return `rotate(${angle.v}${angle.v})`
}

/**
 * [TRANSFORM FUNCTION]
 * Create a 3D rotation
 * @param {number} x The x-axis rotation (0-1)
 * @param {number} y The y-axis rotation (0-1)
 * @param {number} z The z-axis rotation (0-1)
 * @param {UnitValue} angle Angle of rotation
 */
export function rotate3D(x:number, y:number, z:number, angle:UnitValue) {
    return `rotate3d(${x}, ${y}, ${z}, ${angle})`
}


/**
 * [TRANSFORM FUNCTION]
 * Skew an element
 * @param {UnitValue} x The x-axis skew
 * @param {UnitValue} y The y-axis skew
 */
export function skew(x:UnitValue, y:UnitValue) {
    return `skew(${x.v}${x.v}, ${y.v}${y.v})`
}