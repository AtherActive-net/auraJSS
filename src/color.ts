/**
 * A simple RGB color class. Allows for easy manipulation of colors.
 */
export class RGB {
    constructor(public r:number, public g:number, public b:number) {
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
 * Apply a color to text.
 * @param color A color to apply to text
 */
export function color(color:RGB) {
    return {color}
}

/**
 * Apply a color to the background
 * @param color A color to apply to the background
 */
export function backgroundColor(color:RGB) {
    return {"background-color": color}
}


export default {
    RGB,
    color,
    backgroundColor
}