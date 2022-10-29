import { selector,media,width,margin,flex } from "./style.js";

//
//  Used to generate a grid system
//

export const defaultBreakPoints = {
    xs: 300,
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
    xxl: 1400
}

/**
 * Generate a Grid system using Flexbox.
 * Generates `.col`, `.row` `.container` classes.
 * @param divisionCount The number of divisions in the grid (default: `12`)
 * @param breakpoints The breakpoints to use in the grid. (default: `{xs: 300, s: 576, m: 768, l: 992, xl: 1200, xxl: 1400}`)
 */
export function generateGridSystem(divisionCount:number, breakpoints:Object=defaultBreakPoints) {
    let out = [];

    out.push(generateColumns(breakpoints, divisionCount));
    out.push(generateContainers(breakpoints, divisionCount));
    return out;
}


function generateWithBreakpoints(selectorString:string, breakpoints:Object,divisions:number):Array<Object> {
    function generateSizes(index:number) {
        let out = [];
        for(let size in breakpoints) {
            out.push([
                media(`only screen and (max-width: ${breakpoints[size]}px)`,[
                    selector(`${selectorString}-${size}-${index}`,[
                        width({
                            current: {
                                u: '%',
                                v: 100/(12/index)
                            }
                        }),
                    ])
                ]),
            ])
        }
        return out;
    }
    let out = [];
    for(let i=1;i<=divisions;i++){
        out.push([
            generateSizes(i),
            selector(`${selectorString}-${i}`,[
                width({
                    current: {u: '%', v: 100/(12/i)},
                })
            ])
        ])
    }
    return out
}

function generateColumns(breakpoints:Object=defaultBreakPoints, divisions:number=12) {
    let out:Array<Object> = [
        selector(".col,[class^='col-'],[class^=' col-']", [
            flex({direction: 'column'}),
            margin({auto:true})
        ])
    ];

    return out.concat(generateWithBreakpoints('.col',breakpoints,divisions));

}

function generateContainers(breakpoints:Object=defaultBreakPoints, divisions:number=12) {
    let out:Array<Object> = [
        selector(".container,[class^='container-'],[class^=' container-']", [
            flex({direction: 'column'}),
            margin({auto:true})
        ])
    ];

    return out.concat(generateWithBreakpoints('.container',breakpoints,divisions));
}

//
//  Other generators
//

/**
 * Generate color classes automatically. These classes will look like this: `.color-[color]`
 * @param colors The object of colors to generate classes for. It should be noted that only a key:value pair of the RGB class is supported.
 */
export function generateColorClasses(colors:Object) {
    let out = [];
    for (let color in colors) {
        out.push(selector(`.color-${color}`,[
            {color: colors[color]}
        ]))
    }
    return out;
}

/**
 * Generate Background Color classes automatically. These classes will look like this: `.bg-[color]`
 * @param colors The object of colors to generate classes for. It should be noted that only a key:value pair of the RGB class is supported.
 */
 export function generateBackgroundColorClasses(colors:Object) {
    let out = [];
    for (let color in colors) {
        out.push(selector(`.bg-${color}`,[
            {'background-color': colors[color]}
        ]))
    }
    return out;
}