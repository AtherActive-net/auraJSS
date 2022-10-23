import { StyleError, CompileError } from './error.js';
import fs from 'fs';
import { CompilerOptions } from 'interfaces.js';

/**
 * Compile AuraJS stylesheets into CSS
 * @param input The input file. You can also directly specify a Stylesheet object.
 * @param outpath output file path
 * @param silent Define wether or not the compiler should log messages (default: true)
 * @returns A written file containing the generated CSS. It also returns the CSS string.
 */
export async function compile(opts:CompilerOptions={input:undefined}) {
    if(!opts.input) throw new CompileError('Missing required input option');
    let styleSheet;

    if(typeof opts.input === 'string') {
        styleSheet = await import(opts.input);
        // Get the default export from the stylesheet.
        styleSheet = styleSheet.default;
    } else if(typeof opts.input === 'object') {
        styleSheet = opts.input;
    }

    if(!styleSheet) throw new CompileError('No default export found in stylesheet. This must be set to a StyleSheet object.');
    
    if(!opts.silent) compilerLog(`Starting compilation of '${opts.input}'`);

    // Check if there are any obvious errors in the stylesheet.
    errorCheckSheet(styleSheet.styles);

    // Loop over all styles and generate CSS, then write it to a file.
    const css = loopStyles(styleSheet.styles);
    if(opts.outpath) {
        if(!opts.silent) compilerLog(`Writing compiled CSS to '${opts.outpath}'`);
        fs.writeFileSync(opts.outpath, css);
    }
    if(!opts.silent) compilerLog(`Finished compilation of '${opts.input}'`);
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
            css += `${style.selector} {`;
            css += loopStyles(style.style, style.selector);
            if(!closed) css += '}';
        } 
        // If it is an import, add the styles
        else if(style.include) {
            css += loopStyles(style.include.styles, parent);
        }
        // Media queries need to be handled separately
        else if(style.media) {
            css += `@media ${style.media} {`;
            css += loopStyles(style.styles, parent);
            css += '}';
        }
        else if(style.name) {
            // now it is a CSS animation
            css += `@keyframes ${style.name} {`;
            css += loopStyles(style.keyframes, parent);
            css += '}';
        }
        else if(style.percent !== undefined) {
            css += `${style.percent}% {`;
            css += loopStyles(style.styles, parent);
            css += '}';
        }
        // If it is an array of styles, loop over them
        else if(style instanceof Array<any>) {
            css += loopStyles(style, parent);
        }
        // If it is none of the above, it is a style.
        else {
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
            if(selectorFound) {
                throw new StyleError(style,parent);
            }
        }
        
    });
}

/**
 * A simple logging function. Just a wrapper for console.log.
 * @param msg Message to log
 */
function compilerLog(msg:string) {
    console.log(`[AuraJSS] ${msg}`)
}