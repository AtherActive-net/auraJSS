type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

/**
 * Set the flex-direction property.
 * @param direction direction of the flex container
 */
export function flexDirection(direction:flexDirection) {
    return {"flex-direction": direction}
}

/**
 * Set how flex should handle wrapping.
 * @param wrap Wrap option
 */
export function flexWrap(wrap:'wrap' | 'nowrap' | 'wrap-reverse') {
    return {"flex-wrap": wrap}
}


export default {
    flexDirection,
    flexWrap
}