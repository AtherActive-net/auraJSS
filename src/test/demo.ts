
import {StyleSheet} from '../app.js';
import {selector, display, padding, margin, width, height, RGB, backgroundColor, color, position, top, flex} from '../style.js';

const dark = new RGB(20,20,20);
const navbarDark = new RGB(15,15,15);
const white = new RGB(25,255,255);


const sheet = new StyleSheet([
    selector('body', [
        margin({auto: true}),
        padding({unit: 'px', top: 0, right: 0, bottom: 0, left: 0}),
        backgroundColor(dark),
        color(white),
    ]),

    selector('nav', [
        selector('&#top', [
            position('fixed'),
            top('px', 0),
            height({value: {unit: 'rem', value: 5}}),
            backgroundColor(navbarDark),
        ])
    ]),

    selector('col', [
        flex({
            direction: 'column',
            wrap: 'nowrap',
            alignContent: 'flex-start',
        })
    ])
]);

export default sheet;