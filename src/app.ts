import color from './color.js';
import flex from './flex.js';
import StyleSheet from './stylesheet.js';
import fs from 'fs';

/**
 * Compile AuraJS stylesheets into CSS
 * @param path input file path
 * @param out output file path
 * @returns A string of the generated CSS. Should of course not be used in production.
 */
export async function compile(path:string,out:string = 'out.css') {
    let styleSheet = await import(path);
    styleSheet = styleSheet.default;
    const css = loopStyles(styleSheet.styles);
    fs.writeFileSync(out, css);
    return css;
}

/**
 * Loop over all styles, including nested ones.
 * @param styles Array containing styles / selectors
 * @param parent Optional parent selector. Do not set manually.
 * @returns CSS string
 */
function loopStyles(styles:Array<any>, parent?:string) {
    let css = '';
    let closed = false;
    styles.forEach((style) => {

        if(style.selector) {
            if (parent) {
                style.selector = `${parent} ${style.selector}`;
                css += '}'
                closed = true;
            }
            // console.log(style.selector);
            css += `${style.selector} {`;
            css += loopStyles(style.style, style.selector);
            if(!closed) css += '}';
        } else {
            // console.log(Object.keys(style), Object.values(style));
            css += Object.keys(style).map((key) => {
                return `${key}: ${Object.values(style)};`
            }).join('');
        }
    })
    return css
}

export {
    StyleSheet,
    color,
    flex
}