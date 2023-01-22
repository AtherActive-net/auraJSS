import { StyleError, CompileError } from './error.js';
import fs from 'fs';
import { CompilerOptions } from './interfaces.js';

let options:CompilerOptions;

/**
 * Compile AuraJS stylesheets into CSS
 * @param {string | StyleSheet}input The input file. You can also directly specify a Stylesheet object.
 * @param {string} outpath output file path
 * @param {boolean} silent Define wether or not the compiler should log messages (default: true)
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

    options = opts;

    if(!styleSheet) throw new CompileError('No default export found in stylesheet. This must be set to a StyleSheet object.');
    
    if(!opts.silent) compilerLog(`Starting compilation of '${opts.input}'`);
    if(!opts.silent && opts.scssCompatible) compilerLog(`SCSS compatibility mode is enabled.`)

    // Check if there are any obvious errors in the stylesheet.
    errorCheckSheet(styleSheet.styles);

    // Loop over all styles and generate CSS, then write it to a file.
    const css = loopStyles(styleSheet.styles);
    if(opts.outpath) {
        if(!opts.silent) compilerLog(`Writing compiled CSS to '${opts.outpath}'`);
        fs.writeFileSync(opts.outpath, css);
    }
    if(!opts.silent) compilerLog(`Finished compilation of '${opts.input}'\n`);


    return css;
}


/**
 * Loop over all styles, including nested ones.
 * @param {Array<Object>} styles Array containing styles / selectors
 * @param {string} parent Optional parent selector. Do not set manually.
 * @returns CSS string
 */
function loopStyles(styles:Array<any>, parent?:string) {
    let css = '';
    let closed = false;
    styles.forEach((style) => {
        let addedCSS = '';
        if(style.selector) {
            if (parent) {
                if(style.selector.startsWith('&')) {
                    style.selector = `${parent}${style.selector.slice(1)}`;
                } else {
                    style.selector = `${parent} ${style.selector}`;
                }
                addedCSS += '}'
                closed = true;
            }
            addedCSS += `${style.selector} {`;
            addedCSS += loopStyles(style.style, style.selector);
            if(!closed) addedCSS += '}';
        } 
        // If it is an import, add the styles
        else if(style.include) {
            addedCSS += loopStyles(style.include.styles, parent);
        }
        // Media queries need to be handled separately
        else if(style.media) {
            addedCSS += `@media ${style.media} {`;
            addedCSS += loopStyles(style.styles, parent);
            addedCSS += '}';
        }
        else if(style.name) {
            // now it is a CSS animation
            addedCSS += `@keyframes ${style.name} {`;
            addedCSS += loopStyles(style.keyframes, parent);
            addedCSS += '}';
        }
        else if(style.percent !== undefined) {
            addedCSS += `${style.percent}% {`;
            addedCSS += loopStyles(style.styles, parent);
            addedCSS += '}';
        }
        // If it is an array of styles, loop over them
        else if(style instanceof Array<any>) {
            addedCSS += loopStyles(style, parent);
        }
        // If it is none of the above, it is a style.
        else {
            addedCSS += Object.keys(style).map((key,i) => {
                if(typeof Object.values(style)[i] == 'string') {
                    if((Object.values(style)[i] as string).startsWith('$') && !options.scssCompatible) {
                        throw new CompileError("Found a Scss variable while Scss support is disabled. You can enable it by setting the 'ScssCompatible' option to true.")
                    }
                }
                return `${key}: ${Object.values(style)[i]};`
            }).join('');


        }
        css += addedCSS;
    })
    return css
}

/**
 * Check to see if the Stylesheet contains anything that is deemed invalid
 * @param {Array<Object>} styles Array containing styles / selectors
 */
function errorCheckSheet(styles:Array<any>,parent=undefined) {
    let selectorFound = false;

    if(options.scssCompatible) {
        if(!options.outpath.includes('.scss')) {
            throw new CompileError("Scss support is enabled, but the output file does not have the '.scss' extension. This is required for Scss support to work.")
        }
    }

    styles.forEach(style => {
        if(style.selector) {
            selectorFound = true;
            errorCheckSheet(style.style, style.selector);
        } else {
            if(style instanceof Array || style.name != undefined) return;
            if(selectorFound) {
                throw new StyleError(style,parent);
            }
        }
        
    });
}

/**
 * A simple logging function. Just a wrapper for console.log.
 * @param {string} msg Message to log
 */
function compilerLog(msg:string) {
    console.log(`[AuraJSS] ${msg}`)
}