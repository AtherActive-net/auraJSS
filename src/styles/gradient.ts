import { Style } from "../baseclasses.js"
import { UnitValueRotation } from "../interfaces.js"
import { RGB, RGBA } from "./color.js"

type gradientType = 'linear' | 'radial'

/**
 * The Key class is used to define a key inside a gradient.
 */
class Key extends Style {
    public percentage: number;
    public color: RGB | RGBA;
    constructor(percentage:number, color:RGB|RGBA) {
        super()
        this.color = color
        this.percentage = percentage
    }

    public toString() {
        return `${this.color.toString()} ${this.percentage}%`
    }
}

/**
 * Apply a gradient ot an element. Automatically applies it to `baclground-image`.
 * @param {'linear' | 'radial'}type The type of gradient to apply
 * @param {Array<Key>} keys Percentages and colors to use in the gradient
 * @param {UnitValueRotation} angle The angle to use for the gradient (Only for linear gradients)
 */
export function gradient(type:gradientType, keys:Array<Key>, angle?:UnitValueRotation) {
    if(type == 'linear') return {'background-image' : `linear-gradient(${angle.v}${angle.u}, ${keys.join(',')})`}
    return {'background-image' : `${type}-gradient(${keys.join(', ')})`}
}

/**
 * Add a key to a gradient.
 * @param {number} percent The percentage to use for the key
 * @param {RGB | RGBA} color The color to use for the key
 */
export function key(percent:number,color:RGB|RGBA) {
    return new Key(percent,color)
}