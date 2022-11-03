import { PaddingMargin, UnitValue, UnitValueGrid, WidthHeight } from "./interfaces.js"
import { ParameterError } from "./error.js"

// Basic exports
import { compile } from "./compiler.js"
import Stylesheet from "./stylesheet.js"
import * as builtin from "./builtin.js"

// Styles imported from the /styles folder
import { unit, include, rem, px, em, vh, vw, vmin, vmax, percent, s, fr, deg, rad, turn, grad } from "./util.js"
import { RGB, RGBA, color, backgroundColor } from "./styles/color.js"
import { backgrondPosition, backgroundAttachment, backgroundClip, backgroundImage, backgroundOrigin, backgroundRepeat, backgroundSize} from "./styles/background.js"
import { position, top, left, right, bottom, zIndex, objectFit } from "./styles/position.js"
import { border, borderBottom, borderTop, borderLeft, borderRight, borderCollapse, borderRadius, borderImage } from "./styles/border.js"
import { transform, translate, rotate, rotate3D, skew, scale} from "./styles/transform.js"
import { animation, keyframe, createAnimation, transition } from "./styles/animation.js"
import { filter, blur, brightness, contrast, grayscale, hueRotate, invert, opacity as opacityFilter, saturate, sepia} from "./styles/filter.js"
import { gridTemplate, gridColumn, gridGap, gridRow } from "./styles/grid.js"
import {gradient, key} from "./styles/gradient.js"
import { flex } from "./styles/flex.js"
import { font, lineHeight } from "./styles/font.js"
import { listStyle } from "./styles/list.js"

export {
    // basic
    Stylesheet,
    compile,
    builtin,

    // other
    unit,
    include,
    UnitValueGrid,
    UnitValue,
    rem,
    px,
    em,
    vh,
    vw,
    vmin,
    vmax,
    percent,
    s,
    fr,
    deg,
    rad,
    turn,
    grad,
    
    // Color
    RGB,
    RGBA,
    color,
    backgroundColor,

    // Background
    backgrondPosition,
    backgroundAttachment,
    backgroundClip,
    backgroundImage,
    backgroundOrigin,
    backgroundRepeat,
    backgroundSize,

    // Filter
    filter,
    blur,
    brightness,
    contrast,
    grayscale,
    hueRotate,
    invert,
    opacityFilter,
    saturate,
    sepia,

    // Position
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
    objectFit,

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
    flex,

    // Font
    font,
    lineHeight,

    // grid
    gridTemplate,
    gridColumn,
    gridGap,
    gridRow,


    // List
    listStyle,

    // Transform
    transform,
    translate,
    rotate,
    rotate3D,
    skew,
    scale,

    // Animation
    animation,
    keyframe,
    createAnimation,
    transition,

    // gradient
    gradient,
    key,
}

type selectorAutofill = '&:hover'|'&:focus'|'&:focus-visible'|'&:focus-within'|'&:active'|'&:visited'|'&:link'|'&:first-child'|'&:last-child'|'&:nth-last-child'|'&:only-child'|'&:first-of-type'|'&:last-of-type'|'&:nth-last-of-type'|'&:only-of-type'|'&:empty'|'&:target'|'&:enabled'|'&:disabled'|'&:checked'|'&:not'|'&:root'|'&:nth-last-child'|'&:nth-last-of-type'|'&:first'|'&:last'|'&:only'|'&:read-only'|'&:read-write'|'&:placeholder-shown'|'&:default'|'&:valid'|'&:invalid'|'&:in-range'|'&:out-of-range'|'&:required'|'&:optional'|'&:dir'|'&:lang'|'&:current'|'&:past'|'&:future'|'&:scope'|'&:indeterminate'|'&:user-invalid'|'&:user-valid'|'&:drop'
/**
 * A selector to select a CSS class.
 * @param {string} selector CSS selector. You can use `&` to apply something to the current selector.
 * @param {Array<Object>} style Styles to apply to the selector
 * 
 * A regular selector (Selecting the .test class)
 * ```ts
 * selector('.test',[])
 * ```
 * 
 * Selecting a psuedo class (Selecting the .test:hover class)
 * ```ts
 * selector('.test',[ selector('&:hover',[]) ])
 * ```
 */
export function selector(selector:selectorAutofill,style:Array<any>): Object;
export function selector(selector:string,style:Array<any>): Object;
export function selector(selector:string, style:Array<any>): Object {
    return {selector, style}
}

/**
 * Create a new media query.
 * @param {string} query The query. For example: `only screen and (min-width: 768px)`
 * @param {Array<Object>} styles Styles/selctors which will be part of this media query
 */
export function media(query:string, styles:Array<Object>) {
    return {media: query, styles: styles}
}

/**
 * CSS Display property
 * @param {'flex' | 'inline-flex' | 'block' | 'inline-block' | 'inline' | 'none'| 'grid' | 'inline-grid'} opt Display option
 */
export function display(opt:'flex' | 'inline-flex' | 'block' | 'inline-block' | 'inline' | 'none'| 'grid' | 'inline-grid') {
    return {display: opt}
}

/**
 * Apply padding to an element.
 * @param {UnitValue} top Top padding (default: `0`)
 * @param {UnitValue} right Right padding (default: `0`)
 * @param {UnitValue} bottom Bottom padding (default: `0`)
 * @param {UnitValue} left Left padding (default: `0`)
 * @param {UnitValue} all Apply the same padding to all sides
 * @param {boolean} auto Auto padding. Overrides other parameters (default: `false`)
 */
export function padding(opts:Partial<PaddingMargin>) {
    if(!opts) throw new ParameterError()
    if(opts.auto) {
        return {"padding": `auto`}
    }
    if(opts.all) {
        return {"padding": `${opts.all.v}${opts.all.u}`}
    }
    if(!opts.top) opts.top = {v:0,u:'px'}
    if(!opts.right) opts.right = {v:0,u:'px'}
    if(!opts.bottom) opts.bottom = {v:0,u:'px'}
    if(!opts.left) opts.left = {v:0,u:'px'}

    return {"padding": `${opts.top.v}${opts.top.u} ${opts.right.v}${opts.right.u} ${opts.bottom.v}${opts.bottom.u} ${opts.left.v}${opts.left.u}`}
}

/**
 * Apply margin to an element.
 * @param {UnitValue} top Top margin (default: `0`)
 * @param {UnitValue} right Right margin (default: `0`)
 * @param {UnitValue} bottom Bottom margin (default: `0`)
 * @param {UnitValue} left Left margin (default: `0`)
 * @param {UnitValue} all Apply the same margin to all sides
 * @param {boolean} auto Auto margin. Overrides other parameters (default: `false`)
 */
export function margin(opts:Partial<PaddingMargin>) {
    if(!opts) throw new ParameterError()
    if(opts.auto) {
        return {"margin": `auto`}
    }
    if(opts.all) {
        return {"margin": `${opts.all.v}${opts.all.u}`}
    }
    if(!opts.top) opts.top = {v:0,u:'px'}
    if(!opts.right) opts.right = {v:0,u:'px'}
    if(!opts.bottom) opts.bottom = {v:0,u:'px'}
    if(!opts.left) opts.left = {v:0,u:'px'}

    return {"margin": `${opts.top.v}${opts.top.u} ${opts.right.v}${opts.right.u} ${opts.bottom.v}${opts.bottom.u} ${opts.left.v}${opts.left.u}`}
}

/**
 * Set an elements Width. You can set the current, minimum, and maximum width.
 * @param {UnitValue} min Minimum width
 * @param {UnitValue} value Current width
 * @param {UnitValue} max Maximum width
 */
export function width(opts:Partial<WidthHeight>) {
    let out = {};
    if(opts.min) out['min-width'] = `${opts.min.v}${opts.min.u}`;
    if(opts.max) out['max-width'] = `${opts.max.v}${opts.max.u}`;
    if(opts.current) out['width'] = `${opts.current.v}${opts.current.u}`;
    return out;
}

/**
 * Set an elements Height. You can set the current, minimum, and maximum height.
 * @param {UnitValue} min Minimum height
 * @param {UnitValue} value Current height
 * @param {UnitValue} max Maximum height
 */
export function height(opts:Partial<WidthHeight>) {
    let out = {};
    if(opts.min) out['min-height'] = `${opts.min.v}${opts.min.u}`;
    if(opts.max) out['max-height'] = `${opts.max.v}${opts.max.u}`;
    if(opts.current) out['height'] = `${opts.current.v}${opts.current.u}`;
    return out;
}

/**
 * Create a new shadow.
 * @param {UnitValue} hOffset The horizontal offset of the shadow
 * @param {UnitValue} vOffset The vertical offset of the shadow
 * @param {UnitValue} blur The blur distance
 * @param {UnitValue} spread The spread of the shadow
 * @param {RGB | RGBA} color The color of the shadow
 */
export function shadow(hOffset:UnitValue, vOffset:UnitValue, blur:UnitValue, spread:UnitValue, color:RGB) {
    return {'box-shadow': `${hOffset.v}${hOffset.u} ${vOffset.v}${vOffset.u} ${blur.v}${blur.u} ${spread.v}${spread.u} ${color}`}
}

/**
 * How is the width/height of an element calculated.
 * @param {'content-box' | 'border-box'} value The value of this property ('content-box', 'border-box')
 */
export function boxSizing(value:'content-box' | 'border-box') {
    return {'box-sizing': value}
}

/**
 * Set the content property. Required for pseudo elements (::before / ::after).
 * @param {string} value The value to set this property to
 */
export function content(value:string) {
    return {'content': value}
}

/**
 * Set which curser should be displayed when hovering over an element.
 * @param {'auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing' | 'inherit'} value The value of this property
 */
export function cursor(value:'auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing' | 'inherit') {
    return {'cursor': value}
}

/**
 * Set in what direction text is displayed.
 * @param {'ltr' | 'rtl'} value The value of this property ('ltr' | 'rtl')
 */
export function direction(value:'ltr' | 'rtl') {
    return {'direction': value}
}

/**
 * Set the opacity of an element
 * @param {number} value The opacity value
 */
export function opacity(value:number) {
    return {'opacity': value}
}