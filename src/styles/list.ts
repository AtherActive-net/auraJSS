import { ListStyle } from "../interfaces.js";

/**
 * Define how List indicators should be displayed.
 * @param {string} type The type of icon to use
 * @param {string} position The position of the icon
 * @param {string} image The image to use as the icon
 */
export function listStyle(opts:Partial<ListStyle>) {
    let out = {};
    if(opts.type) out['list-style-type'] = opts.type;
    if(opts.position) out['list-style-position'] = opts.position;
    if(opts.image) out['list-style-image'] = opts.image;
    return out;
}