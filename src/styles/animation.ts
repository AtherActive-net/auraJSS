import { Animation } from "../interfaces.js";

/**
 * Set an animation to play on an element. Animations must be created using the `createAnimation` function.
 * @param {string} name The name of the animation
 * @param {string} duration The duration of the animation
 * @param {string} timing The timing function of the animation
 * @param {string} delay The delay of the animation
 * @param {string} iteration The number of times the animation should play
 * @param {string} direction The direction of the animation
 * @param {string} fillMode The fill mode of the animation
 * @param {string} playState The play state of the animation
 */
export function animation(opts:Partial<Animation>) {
    let out = {};
    if(opts.name) out['animation-name'] = `'${opts.name}'`;
    if(opts.duration) out['animation-duration'] = `${opts.duration.value}${opts.duration.unit}`;
    if(opts.timing) out['animation-timing-function'] = opts.timing;
    if(opts.delay) out['animation-delay'] = `${opts.delay.value}${opts.delay.unit}`;
    if(opts.iteration) out['animation-iteration-count'] = opts.iteration;
    if(opts.direction) out['animation-direction'] = opts.direction;
    if(opts.fillMode) out['animation-fill-mode'] = opts.fillMode;
    if(opts.playState) out['animation-play-state'] = opts.playState;
    return out;
}

/**
 * Create a new Animation.
 * @param name The name of the animation
 * @param keyframes Keyframes part of this animation
 */
export function createAnimation(name:string,keyframes:Array<Object>) {
    return {name: name, keyframes: keyframes}
}

/**
 * A keyframe inside an animation.
 * @param percent The percentage of the animation that should be complete
 * @param styles Array of styles to apply at this point in the animation
 */
export function keyframe(percent:number, styles:Array<Object>) {
    return {percent: percent, styles: styles}
}