import { unit } from "./util.js"
import { PaddingMargin, UnitValue, WidthHeight } from "./interfaces.js"
import { ParameterError } from "./error.js"

import { RGB, color, backgroundColor } from "./color.js"
import { position, top,left,right,bottom,zIndex } from "./styles/position.js"
import { border, borderBottom, borderTop, borderLeft, borderRight, borderCollapse, borderRadius, borderImage } from "./styles/border.js"
import { flex } from "./styles/flex.js"

export {
    // Color
    RGB,
    color,
    backgroundColor,
    unit,

    // Position
    position,
    top,
    left,
    right,
    bottom,
    zIndex,

    // Border
    border,
    borderBottom,
    borderTop,
    borderLeft,
    borderRight,
    borderCollapse,
    borderRadius,
    borderImage,

    // flex
    flex
}

/**
 * A selector to select a CSS class.
 * @param selector CSS selector. You can use `&` to apply something to the current selector.
 * @param style Styles to apply to the selector
 */
 export function selector(selector:string, style:Array<any>) {
    return {selector, style}
}

/**
 * CSS Display property
 * @param opt Display option
 */
export function display(opt:'flex' | 'inline-flex' | 'block' | 'inline-block' | 'inline' | 'none') {
    return {display: opt}
}

/**
 * Apply padding to an element.
 * @param unit Unit of measurement (default: `px`)
 * @param top Top padding (default: `0`)
 * @param right Right padding (default: `0`)
 * @param bottom Bottom padding (default: `0`)
 * @param left Left padding (default: `0`)
 * @param auto Auto padding. Overrides other parameters (default: `false`)
 */
export function padding(opts:Partial<PaddingMargin>) {
    if(opts.auto) {
        return {padding: 'auto'}
    }
    return {"padding": `${opts.top}${opts.unit} ${opts.right}${opts.unit} ${opts.bottom}${opts.unit} ${opts.left}${opts.unit}`}
}

/**
 * Apply margin to an element.
 * @param unit Unit of measurement (default: `px`)
 * @param top Top margin (default: `0`)
 * @param right Right margin (default: `0`)
 * @param bottom Bottom margin (default: `0`)
 * @param left Left margin (default: `0`)
 * @param auto Auto margin. Overrides other parameters (default: `false`)
 */
 export function margin(opts:Partial<PaddingMargin>={unit:'px', top:0, right:0, bottom:0, left:0, auto:false}) {
    if(!opts) throw new ParameterError()
    if(opts.auto) {
        return {"margin": `auto`}
    }
    return {"margin": `${opts.top}${opts.unit} ${opts.right}${opts.unit} ${opts.bottom}${opts.unit} ${opts.left}${opts.unit}`}
}

export function width(opts:Partial<WidthHeight>) {
    let out = {};
    if(opts.min) out['min-width'] = `${opts.min.value}${opts.min.unit}`;
    if(opts.max) out['max-width'] = `${opts.max.value}${opts.max.unit}`;
    if(opts.value) out['width'] = `${opts.value.value}${opts.value.unit}`;
    return out;
}

export function height(opts:Partial<WidthHeight>) {
    let out = {};
    if(opts.min) out['min-height'] = `${opts.min.value}${opts.min.unit}`;
    if(opts.max) out['max-height'] = `${opts.max.value}${opts.max.unit}`;
    if(opts.value) out['height'] = `${opts.value.value}${opts.value.unit}`;
    return out;
}

/**
 * Align content in an element.
 * @param value The value of this property ('flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch')
 */
export function alignContent(value:'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch') {
    return {'align-content': value}
}

/**
 * Align self in an element.
 * @param value The value of this property ('flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch')
 */
export function alignSelf(value:'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch') {
    return {'align-self': value}
}

/**
 * Align items in an element.
 * @param value The value of this property ('flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch')
 * @returns 
 */
export function alignItems(value:'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch') {
    return {'align-items': value}
}

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

/**
 * Create a new shadow.
 * @param unit The unit to use (This is used for ALL values below)
 * @param hOffset The horizontal offset of the shadow
 * @param vOffset The vertical offset of the shadow
 * @param blur The blur distance
 * @param spread The spread of the shadow
 * @param color The color of the shadow
 */
export function shadow(unit:unit,hOffset:number=0, vOffset:number=0, blur:number=0, spread:number=0, color:RGB) {
    return {'box-shadow': `${hOffset}${unit} ${vOffset}${unit} ${blur}${unit} ${spread}${unit} ${color}`}
}

/**
 * How is the width/height of an element calculated.
 * @param value The value of this property ('content-box', 'border-box')
 */
export function boxSizing(value:'content-box' | 'border-box') {
    return {'box-sizing': value}
}

/**
 * Set the content property. Required for pseudo elements (::before / ::after).
 * @param value The value to set this property to
 */
export function content(value:string) {
    return {'content': value}
}

/**
 * Set which curser should be displayed when hovering over an element.
 * @param value The value of this property ('auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing' | 'inherit')
 */
export function cursor(value:'auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing' | 'inherit') {
    return {'cursor': value}
}

/**
 * What direction should text be displayed?
 * @param value The value of this property ('ltr' | 'rtl')
 */
export function direction(value:'ltr' | 'rtl') {
    return {'direction': value}
}