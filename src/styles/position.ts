import { unit } from "../util.js";

export function position(value: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky') {
    return { position: value };
}

export function left(unit:unit,value:number) {
    return { left: `${value}${unit}` };
}

export function right(unit:unit,value:number) {
    return { right: `${value}${unit}` };
}

export function top(unit:unit,value:number) {
    return { top: `${value}${unit}` };
}

export function bottom(unit:unit,value:number) {
    return { bottom: `${value}${unit}` };
}

export function zIndex(value:number) {
    return { 'z-index': value };
}