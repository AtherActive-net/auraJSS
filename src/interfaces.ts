import { Stylesheet } from "./style.js"
import { unit } from "./util.js"

export interface PaddingMargin {
    unit:'px'|'em'|'rem',
    top:number, 
    right:number, 
    bottom:number, 
    left:number,
    auto:boolean
}

export interface UnitValue {
    u: unit,
    v: number
}

export interface WidthHeight {
    min?: UnitValue,
    max?: UnitValue,
    current?: UnitValue,
}

export interface CompilerOptions {
    input: string|Stylesheet,
    outpath?: string,
    silent?: boolean,
    removeEmptySelectors?: boolean,
}

export interface FlexOptions {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
    grow?: number,
    shrink?: number,
    basis?: number,
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch',
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
}

export interface FontOptions {
    family?: string,
    size?: UnitValue,
    weight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number,
    style?: 'normal' | 'italic' | 'oblique',
    variant?: 'normal' | 'small-caps',
}

export interface GridOptions {
    row: 'none'|'auto'|'max-content'|'min-content'|UnitValue,
    column: 'none'|'auto'|'max-content'|'min-content'|UnitValue,
    areas: string,
    autoRows: 'none'|'auto'|'max-content'|'min-content'|UnitValue,
    autoColumns: 'none'|'auto'|'max-content'|'min-content'|UnitValue,
    autoFlow: 'row'|'column'|'row dense'|'column dense'
}

export interface ListStyle {
    type?: 'none' | 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha' | 'inherit',
    position?: 'inside' | 'outside',
    image?: string,
}

export interface Animation {
    name?: string,
    duration?: UnitValue,
    timing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end',
    delay?: UnitValue,
    iteration?: number,
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse',
    fillMode?: 'none' | 'forwards' | 'backwards' | 'both',
    playState?: 'running' | 'paused',
}

export interface Keyframe {
    from?: Object,
    to?: Object,
    percent?: number,
}