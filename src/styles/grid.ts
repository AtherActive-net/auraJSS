import { ParameterError } from "error";
import { GridOptions } from "interfaces";

/**
 * Create a grid layout.
 * @param row Template row size
 * @param column Template column size
 * @param areas Template areas
 * @param autoRows Auto row size
 * @param autoColumns Auto column size
 * @param autoFlow Auto flow
 */
export function grid(opts:GridOptions) {
    if(!opts) throw new ParameterError();
    let out = {};
    if(opts.row) out['grid-template-row'] = opts.row;
    if(opts.column) out['grid-template-column'] = opts.column;
    if(opts.areas) out['grid-template-areas'] = opts.areas;
    if(opts.autoFlow) out['grid-auto-flow'] = opts.autoFlow;
    if(opts.autoRows) out['grid-auto-rows'] = opts.autoRows;
    if(opts.autoColumns) out['grid-auto-columns'] = opts.autoColumns;
    return out;
}