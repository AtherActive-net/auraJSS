/**
 * Create a for loop to generate a list of styles.
 * Note: To use the `selector` in a place where the value would be anything BUT a `string`, you must use the `loopResolve` function.
 * ```
 * loopCounter(0, 4, [
 *    // A demo selector
 *    selector('demo-<#i>', [
 *       margin({unit:'rem', top: loopResolve('<#i>')}),
 *    ])
 * ])
 * ````
 * @param startvalue The start value of the loop
 * @param endvalue The end value of the loop
 * @param styles A collection of styles and/or selectors
 * @param selector What string placeholder to use for the loop value. Defaults to `<#i>`
 */
export function loopCounter(startvalue:number, endvalue:number, styles:Array<any>, selector:string='<#i>') {
    let out = [];
    for(let index = startvalue; index <= endvalue; index++) {
        styles.forEach(style => {
            let str = JSON.stringify(style);
            let newstyle = JSON.parse(str);

            if(style.selector) {
                newstyle.selector = style.selector.replaceAll(selector, index);
                newstyle.style = loopCounter(index, index, style.style,selector);

            } else {
                Object.keys(newstyle).forEach(key => {
                    if(typeof newstyle[key] == "string") {
                        newstyle[key] = newstyle[key].replaceAll(selector, index);
                    }
                    else if(newstyle[key] instanceof Object) {

                        newstyle[key] = newstyle[key].toString()
                    }
                })
            }

            out.push(newstyle);
        });
    }
    return out;
}

/**
 * loopResolve is used to resolve Loop selectors when a loop is executed.
 * This is required to make use of the `selector` a loop will provide.
 * @param value The value to resolve
 */
export function loopResolve(value:any) {
    return value;
}