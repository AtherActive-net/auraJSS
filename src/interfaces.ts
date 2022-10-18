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
    unit: unit,
    value: number
}

export interface WidthHeight {
    min?: UnitValue,
    max?: UnitValue,
    value?: UnitValue,
}

export interface CompilerOptions {
    inpath: string,
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