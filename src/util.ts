import StyleSheet from "stylesheet"

export type unit = 'px'|'em'|'rem'|'vh'|'vw'|'vmin'|'vmax'|'%'

/**
 * Include another stylesheet inside a stylesheet.
 * @param {StyleSheet} sheet The stylesheet to include
 */
export function include(sheet:StyleSheet) {
    return {'include': sheet}
}