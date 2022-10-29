import { Animation, Transition } from "../interfaces.js";

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
    if(opts.name) out['animation-name'] = opts.name;
    if(opts.duration) out['animation-duration'] = `${opts.duration.v}${opts.duration.u}`;
    if(opts.timing) out['animation-timing-function'] = opts.timing;
    if(opts.delay) out['animation-delay'] = `${opts.delay.v}${opts.delay.u}`;
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

/**
 * Apply transitions to an element.
 * @param {string} props The properties to apply transitions to. Can be a string or an array of strings
 * @param {UnitValue} duration The duration of this transition.
 * @param {string} timing The timing function of this transition.
 * @param {UnitValue} delay The delay of this transition.
 */
export function transition(opts:Partial<Transition>) {
    let out = {};
    if(opts.props) {
        if(opts.props instanceof Array<String>) {
            out['transition-property'] = opts.props.join(',')
        } else {
            out['transition-property'] = opts.props;
        }
    }

    if(opts.duration) out['transition-duration'] = `${opts.duration.v}${opts.duration.u}`;
    if(opts.timing) out['transition-timing-function'] = opts.timing;
    if(opts.delay) out['transition-delay'] = `${opts.delay.v}${opts.delay.u}`;

    return out;
}