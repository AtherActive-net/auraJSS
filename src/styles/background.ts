import { UnitValue } from "interfaces.js"
import { unit } from "../util.js"
/**
 * Set the background image.
 * @param {string} url The url of the image (Can be URL or 'none')
 */
 export function backgroundImage(url:string|'none') {
    if(url === 'none') {
        return {'background-image': 'none'}
    }
    return {'background-image': `url(${url})`}
}

/**
 * Set the position of the background.
 * @param {'left' | 'center' | 'right'} x The x position of the background image
 * @param {'left' | 'center' | 'right'} y The y position of the background image
 */
export function backgrondPosition(x:'left' | 'center' | 'right', y:'top' | 'center' | 'bottom') {
    return {'background-position': `${x} ${y}`}
}

/**
 * 
 * @param {'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'} value The value of this property
 * @param {unit} unit opt: If setting width/height, the unit of measurement must be set (px,em,rem)
 * @param {number} width opt: The width of the background
 * @param {number} height opt: The height of the background
 */
export function backgroundSize(value:'auto' | 'cover' | 'contain', unit?:unit,width?:number, height?:number) {
    if(width && height) {
        return {'background-size': `${value} ${width}${unit} ${height}${unit}`}
    }
    return {'background-size': value}
}

/**
 * Set if/how a background image will be repeated.
 * @param {'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'space' | 'round' | 'inherit'} value The value of this property
 */
export function backgroundRepeat(value:'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'space' | 'round' | 'inherit') {
    return {'background-repeat': value}
}

/**
 * Set the background origin position.
 * @param {'padding-box' | 'border-box' | 'content-box'} value The value of this property
 */
export function backgroundOrigin(value:'padding-box' | 'border-box' | 'content-box') {
    return {'background-origin': value}
}

/**
 * Define how far the background (color or image) should extend within an element.
 * @param {'padding-box' | 'border-box' | 'content-box'} value The value of this property
 */
export function backgroundClip(value:'padding-box' | 'border-box' | 'content-box') {
    return {'background-origin': value}
}

/**
 * Set wether or not the background image is fixed.
 * @param {'scroll' | 'fixed' | 'local'} value The value of this property
 */
export function backgroundAttachment(value:'scroll' | 'fixed' | 'local') {
    return {'background-attachment': value}
}
