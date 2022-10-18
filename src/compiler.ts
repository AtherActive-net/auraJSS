import { StyleError, CompileError } from './error.js';
import fs from 'fs';
import { CompilerOptions } from 'interfaces.js';

/**
 * Compile AuraJS stylesheets into CSS
 * @param path input file path
 * @param out output file path
 * @returns A written file containing the generated CSS. It also returns the CSS string. Should of course not be used in production.
 */
export async function compile(opts:CompilerOptions={inpath:undefined}) {
    let styleSheet = await import(opts.inpath);

    // Get the default export from the stylesheet.
    styleSheet = styleSheet.default;
    if(!styleSheet) throw new CompileError('No default export found in stylesheet. This must be set to a StyleSheet object.');
    
    compilerLog(`Starting compilation of '${opts.inpath}'`);
    compilerLog(`Found ${styleSheet.styles.length} base level styles..`);

    // Check if there are any obvious errors in the stylesheet.
    errorCheckSheet(styleSheet.styles);

    // Loop over all styles and generate CSS, then write it to a file.
    const css = loopStyles(styleSheet.styles);
    if(opts.outpath) {
        compilerLog(`Writing compiled CSS to '${opts.outpath}'`);
        fs.writeFileSync(opts.outpath, css);
    }
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
    styles.forEach(async (style) => {

        if(style.selector) {
            if (parent) {
                if(style.selector.startsWith('&')) {
                    style.selector = `${parent}${style.selector.slice(1)}`;
                } else {
                    style.selector = `${parent} ${style.selector}`;
                }
                css += '}'
                closed = true;
            }
            // console.log(style.selector);
            css += `${style.selector} {`;
            css += loopStyles(style.style, style.selector);
            if(!closed) css += '}';
        } 
        // If it is an import, add the styles
        else if(style.include) {
            css += loopStyles(style.include.styles, parent);
        }
        else if(style instanceof Array<any>) {
            css += loopStyles(style, parent);
        }
        // If it is none of the above, it is a style.
        else {
            // console.log(Object.keys(style), Object.values(style));
            css += Object.keys(style).map((key,i) => {
                return `${key}: ${Object.values(style)[i]};`
            }).join('');


        }
    })
    return css
}

/**
 * Check to see if the Stylesheet contains anything that is deemed invalid
 * @param styles Array containing styles / selectors
 */
function errorCheckSheet(styles:Array<any>,parent=undefined) {
    let selectorFound = false;
    styles.forEach(style => {
        if(style.selector) {
            selectorFound = true;
            errorCheckSheet(style.style, style.selector);
        } else {
            // if(selectorFound) {
            //     throw new StyleError(style,parent);
            // }
        }
        
    });
}

/**
 * A simple logging function. Just a wrapper for console.log.
 * @param msg Message to log
 */
function compilerLog(msg:string) {
    console.log(`[AuraJS] ${msg}`)
}