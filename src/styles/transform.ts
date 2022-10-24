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
 * @param x The x-axis translation
 * @param y The y-axis translation
 * @param z The z-axis translation. If left blank it will create a 2D translate.
 */
export function translate(x:UnitValue, y:UnitValue, z?:UnitValue) {
    if(z) return `translate3d(${x.value}${x.unit}, ${y.value}${y.unit}, ${z.value}${z.unit})`
    return `translate(${x.value}${x.unit}, ${y.value}${y.unit})`
}

/**
 * [TRANSFORM FUNCTION]
 * Scale an element up/down.
 * @param x The x-axis scale
 * @param y The y-axis scale
 * @param z The z-axis scale. If left blank it will create a 2D scale.
 */
export function scale(x:number, y:number, z?:number) {
    if(z) return `scale3d(${x}, ${y}, ${z})`
    return `scale(${x}, ${y})`
}

/**
 * [TRANSFORM FUNCTION]
 * Apply a rotation to an element.
 * @param angle The angle of rotation
 */
export function rotate(angle:UnitValue) {
    return `rotate(${angle.value}${angle.unit})`
}

/**
 * [TRANSFORM FUNCTION]
 * Create a 3D rotation
 * @param x The x-axis rotation (0-1)
 * @param y The y-axis rotation (0-1)
 * @param z The z-axis rotation (0-1)
 * @param angle Angle of rotation
 */
export function rotate3D(x:number, y:number, z:number, angle:UnitValue) {
    return `rotate3d(${x}, ${y}, ${z}, ${angle})`
}


/**
 * [TRANSFORM FUNCTION]
 * Skew an element
 * @param x The x-axis skew
 * @param y The y-axis skew
 */
export function skew(x:UnitValue, y:UnitValue) {
    return `skew(${x.value}${x.unit}, ${y.value}${y.unit})`
}