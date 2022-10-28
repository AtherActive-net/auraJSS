import { PaddingMargin, UnitValue, UnitValueGrid, WidthHeight } from "./interfaces.js"
import { ParameterError } from "./error.js"

// Basic exports
import { compile } from "./compiler.js"
import Stylesheet from "./stylesheet.js"
import * as builtin from "./builtin.js"

// Styles imported from the /styles folder
import { unit, include, rem, px, em, vh, vw, vmin, vmax, percent, s, fr } from "./util.js"
import { RGB, color, backgroundColor } from "./styles/color.js"
import { backgrondPosition, backgroundAttachment, backgroundClip, backgroundImage, backgroundOrigin, backgroundRepeat, backgroundSize} from "./styles/background.js"
import { position, top,left,right,bottom,zIndex } from "./styles/position.js"
import { border, borderBottom, borderTop, borderLeft, borderRight, borderCollapse, borderRadius, borderImage } from "./styles/border.js"
import {transform, translate, rotate, rotate3D, skew, scale} from "./styles/transform.js"
import { animation, keyframe, createAnimation, transition } from "./styles/animation.js"
import { gridTemplate, gridColumn, gridGap, gridRow } from "./styles/grid.js"
import { flex } from "./styles/flex.js"
import { font } from "./styles/font.js"
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
    
    // Color
    RGB,
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
    flex,

    // Font
    font,

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
    transition
}

/**
 * A selector to select a CSS class.
 * @param selector CSS selector. You can use `&` to apply something to the current selector.
 * @param style Styles to apply to the selector
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
 export function selector(selector:string, style:Array<any>) {
    return {selector, style}
}

/**
 * Create a new media query.
 * @param query The query. For example: `only screen and (min-width: 768px)`
 * @param styles Styles/selctors which will be part of this media query
 */
export function media(query:string, styles:Array<Object>) {
    return {media: query, styles: styles}
}

/**
 * CSS Display property
 * @param opt Display option
 */
export function display(opt:'flex' | 'inline-flex' | 'block' | 'inline-block' | 'inline' | 'none'| 'grid' | 'inline-grid') {
    return {display: opt}
}

/**
 * Apply padding to an element.
 * @param top Top padding (default: `0`)
 * @param right Right padding (default: `0`)
 * @param bottom Bottom padding (default: `0`)
 * @param left Left padding (default: `0`)
 * @param all Apply the same padding to all sides
 * @param auto Auto padding. Overrides other parameters (default: `false`)
 */
export function padding(opts:Partial<PaddingMargin>) {
    if(!opts) throw new ParameterError()
    if(opts.auto) {
        return {"padding": `auto`}
    }
    if(opts.all) {
        return {"padding": `${opts.all.v}${opts.all.u}`}
    }
    return {"padding": `${opts.top.v|0}${opts.top.u} ${opts.right.v|0}${opts.right.u} ${opts.bottom.v|0}${opts.bottom.u} ${opts.left.v|0}${opts.left.u}`}
}

/**
 * Apply margin to an element.
 * @param top Top margin (default: `0`)
 * @param right Right margin (default: `0`)
 * @param bottom Bottom margin (default: `0`)
 * @param left Left margin (default: `0`)
 * @param all Apply the same margin to all sides
 * @param auto Auto margin. Overrides other parameters (default: `false`)
 */
export function margin(opts:Partial<PaddingMargin>) {
    if(!opts) throw new ParameterError()
    if(opts.auto) {
        return {"margin": `auto`}
    }
    if(opts.all) {
        return {"margin": `${opts.all.v}${opts.all.u}`}
    }
    return {"margin": `${opts.top.v|0}${opts.top.u} ${opts.right.v|0}${opts.right.u} ${opts.bottom.v|0}${opts.bottom.u} ${opts.left.v|0}${opts.left.u}`}
}

/**
 * Set an elements Width. You can set the current, minimum, and maximum width.
 * @param min Minimum width
 * @param value Current width
 * @param max Maximum width
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
 * @param min Minimum height
 * @param value Current height
 * @param max Maximum height
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
 * Set in what direction text is displayed.
 * @param value The value of this property ('ltr' | 'rtl')
 */
export function direction(value:'ltr' | 'rtl') {
    return {'direction': value}
}

/**
 * Set the opacity of an element
 * @param value The opacity value
 */
export function opacity(value:number) {
    return {'opacity': value}
}