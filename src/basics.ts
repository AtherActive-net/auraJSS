type displayOptions = 'flex' | 'inline-flex' | 'block' | 'inline-block' | 'inline' | 'none';

/**
 * A selector to select a CSS class.
 * @param selector CSS selector
 * @param style Styles to apply to the selector
 */
 export function selector(selector:string, style:Array<any>) {
    return {selector, style}
}

/**
 * CSS Display property
 * @param opt Display option
 */
export function display(opt:displayOptions) {
    return {display: opt}
}

/**
 * Apply padding to an element.
 * @param unit Unit of measurement (px,em,rem)
 * @param top top padding
 * @param right right padding
 * @param bottom bottom padding
 * @param left left padding
 */
export function padding(unit:'px'|'em'|'rem' ,top?:number, right?:number, bottom?:number, left?:number) {
    return {"padding": `${top}${unit} ${right}${unit} ${bottom}${unit} ${left}${unit}`}
}

/**
 * Apply margin to an element.
 * @param unit Unit of measurement (px,em,rem)
 * @param top top margin
 * @param right right margin
 * @param bottom bottom margin
 * @param left left margin
 */
 export function margin(unit:'px'|'em'|'rem' ,top?:number, right?:number, bottom?:number, left?:number) {
    return {"margin": `${top}${unit} ${right}${unit} ${bottom}${unit} ${left}${unit}`}
}