import { Style } from "../baseclasses.js"
import { UnitValueRotation } from "../interfaces.js"
import { RGB, RGBA } from "./color.js"

type gradientType = 'linear' | 'radial'

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

export function gradient(type:gradientType, keys:Array<Key>, angle?:UnitValueRotation) {
    if(type == 'linear') return {'background-image' : `linear-gradient(${angle.v}${angle.u}, ${keys.join(',')})`}
    return {'background-image' : `${type}-gradient(${keys.join(', ')})`}
}

export function key(percent:number,color:RGB|RGBA) {
    return new Key(percent,color)
}