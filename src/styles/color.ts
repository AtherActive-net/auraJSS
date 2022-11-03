import { Style } from "../baseclasses.js";

/**
 * A simple RGB color class. Allows for easy manipulation of colors.
 */
export class RGB extends Style {
    constructor(public r:number, public g:number, public b:number) {
        super();
        this.r = r;
        this.g = g;
        this.b = b;
    }

    /**
     * Create a string of the stored values, needed for CSS.
     * @returns A string of the RGB color in the format 'rgb(r,g,b)'
     */
    public toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}

/**
 * A simple RGBA color class.
 * This class extends RGB and is fully compatible with any field using RGB.
 */
export class RGBA extends RGB {
    public a: number

    constructor(r:number, g:number, b:number, a:number) {
        super(r,g,b);
        this.a = a;
    }

    /**
     * Create a string of the stored values, needed for CSS.
     * @returns A string of the RGBA color in the format 'rgba(r,g,b,a)'
     */
    public toString(): string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
}

/**
 * Apply a color to text.
 * @param {RGB | RGBA} color A color to apply to text
 */
export function color(color:RGB|RGBA) {
    return {color}
}

/**
 * Apply a color to the background
 * @param {RGB | RGBA} color A color to apply to the background
 */
export function backgroundColor(color:RGB|RGBA) {
    return {"background-color": color.toString()}
}


export default {
    RGB,
    color,
    backgroundColor
}