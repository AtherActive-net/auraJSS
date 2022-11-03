import { GridGap, GridStartEnd, GridTemplate, UnitValueGrid } from "../interfaces.js";

/**
 * Define a grid template. All options can contain `string`, `unitValueGrid` or `number`(which defaults to `px`). This also automatically
 * sets display to `grid`.
 * @param {Array<string|UnitValueGrid|number>} colums Column template array.
 * @param {Array<string|UnitValueGrid|number>} rows Row template array.
 */
export function gridTemplate(otps:GridTemplate) {
    let out = {}
    out['display'] = 'grid';
    if(otps.columns) out['grid-template-columns'] = convertToString(otps.columns);
    if(otps.rows) out['grid-template-rows'] = convertToString(otps.rows);
    return out;
}

/**
 * Define the start and end of a grid item in terms of rows.
 * @param {number|'auto'} start The start of the item.
 * @param {number|'auto'} end The end of the item.
 */
export function gridRow(opts:GridStartEnd) {
    let out = {}
    if(opts.start) out['grid-row-start'] = opts.start;
    if(opts.end) out['grid-row-end'] = opts.end;
    return out;
}

/**
 * Define the start and end of a grid item in terms of columns.
 * @param {number|'auto'} start The start of the item.
 * @param {number|'auto'} end The end of the item.
 */
export function gridColumn(opts:GridStartEnd) {
    let out = {}
    if(opts.start) out['grid-column-start'] = opts.start;
    if(opts.end) out['grid-column-end'] = opts.end;
    return out;
}

/**
 * Define the gap between grid items.
 * @param {UnitValueGrid} column The gap between items.
 * @param {UnitValueGrid} row The gap between rows.
 */
export function gridGap(opt:GridGap) {
    let out = {}
    if(opt.column) out['grid-column-gap'] = `${opt.column.v}${opt.column.u}`;
    if(opt.row) out['grid-row-gap'] = `${opt.column.v}${opt.column.u}`;
    return out;
}

/**
 * Convert an array for grid to something that is actually usable.
 * @param {Array<string|UnitValueGrid|number>} opts Input array of options
 */
function convertToString(opts:Array<string|UnitValueGrid|number>) {
    let str = '';
    opts.forEach((opt) => {
        if(typeof opt === 'string') {
            str += opt + ' ';
        } else if (typeof opt === 'object') {
            if(Object.keys(opt).includes('u')) {
                str += `${opt.v}${opt.u} `;
            }
        } else if (typeof opt === 'number') {
            str += `${opt}px `
        }
    });
    return str;
}
