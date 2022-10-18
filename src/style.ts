import { PaddingMargin, UnitValue, WidthHeight } from "./interfaces.js"
import { ParameterError } from "./error.js"

// Styles imported from the /styles folder
import { unit } from "./util.js"
import { RGB, color, backgroundColor } from "./color.js"
import { backgrondPosition, backgroundAttachment, backgroundClip, backgroundImage, backgroundOrigin, backgroundRepeat, backgroundSize} from "./styles/background.js"
import { position, top,left,right,bottom,zIndex } from "./styles/position.js"
import { border, borderBottom, borderTop, borderLeft, borderRight, borderCollapse, borderRadius, borderImage } from "./styles/border.js"
import { flex } from "./styles/flex.js"
import { font } from "./styles/font.js"

export {
    // Color
    RGB,
    color,
    backgroundColor,
    unit,

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
    font
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
    return {"padding": `${opts.top|0}${opts.unit} ${opts.right|0}${opts.unit} ${opts.bottom|0}${opts.unit} ${opts.left|0}${opts.unit}`}
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
    if(!opts.unit) opts.unit = 'px'
    if(opts.auto) {
        return {"margin": `auto`}
    }
    return {"margin": `${opts.top|0}${opts.unit} ${opts.right|0}${opts.unit} ${opts.bottom|0}${opts.unit} ${opts.left|0}${opts.unit}`}
}

/**
 * Set an elements Width. You can set the current, minimum, and maximum width.
 * @param min Minimum width
 * @param value Current width
 * @param max Maximum width
 */
export function width(opts:Partial<WidthHeight>) {
    let out = {};
    if(opts.min) out['min-width'] = `${opts.min.value}${opts.min.unit}`;
    if(opts.max) out['max-width'] = `${opts.max.value}${opts.max.unit}`;
    if(opts.value) out['width'] = `${opts.value.value}${opts.value.unit}`;
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
    if(opts.min) out['min-height'] = `${opts.min.value}${opts.min.unit}`;
    if(opts.max) out['max-height'] = `${opts.max.value}${opts.max.unit}`;
    if(opts.value) out['height'] = `${opts.value.value}${opts.value.unit}`;
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