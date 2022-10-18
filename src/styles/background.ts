import { unit } from "../util.js"
/**
 * Set the background image.
 * @param url The url of the image (Can be URL or 'none')
 */
 export function backgroundImage(url:string|'none') {
    if(url === 'none') {
        return {'background-image': 'none'}
    }
    return {'background-image': `url(${url})`}
}

/**
 * Set the position of the background.
 * @param x The x position of the background image
 * @param y The y position of the background image
 */
export function backgrondPosition(x:'left' | 'center' | 'right', y:'top' | 'center' | 'bottom') {
    return {'background-position': `${x} ${y}`}
}

/**
 * 
 * @param value The value of this property ('flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch')
 * @param unit opt: If setting width/height, the unit of measurement must be set (px,em,rem)
 * @param width opt: The width of the background
 * @param height opt: The height of the background
 */
export function backgroundSize(value:'auto' | 'cover' | 'contain', unit?:unit,width?:number, height?:number) {
    if(width && height) {
        return {'background-size': `${value} ${width}${unit} ${height}${unit}`}
    }
    return {'background-size': value}
}

/**
 * Set if/how a background image will be repeated.
 * @param value The value of this property ('repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'space' | 'round' | 'inherit')
 */
export function backgroundRepeat(value:'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'space' | 'round' | 'inherit') {
    return {'background-repeat': value}
}

/**
 * Set the background origin position.
 * @param value The value of this property ('padding-box' | 'border-box' | 'content-box')
 */
export function backgroundOrigin(value:'padding-box' | 'border-box' | 'content-box') {
    return {'background-origin': value}
}

/**
 * Define how far the background (color or image) should extend within an element.
 * @param value The value of this property ('padding-box' | 'border-box' | 'content-box')
 */
export function backgroundClip(value:'padding-box' | 'border-box' | 'content-box') {
    return {'background-origin': value}
}

/**
 * Set wether or not the background image is fixed.
 * @param value The value of this property ('scroll' | 'fixed' | 'local')
 */
export function backgroundAttachment(value:'scroll' | 'fixed' | 'local') {
    return {'background-attachment': value}
}
