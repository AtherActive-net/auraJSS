
import {StyleSheet} from '../app.js';
import {backgroundColor, color, RGB} from '../color.js';
import {flexDirection, flexWrap} from '../flex.js';
import {display, margin, padding, selector} from '../basics.js';
import {border, borderRadius} from '../border.js';

const darkgrey = new RGB(20, 20, 20);

const sheet = new StyleSheet([
    selector('div', [
        backgroundColor(darkgrey),
        border('rem',0.1,'solid',new RGB(255,0,0)),
        borderRadius('rem',0.5),
    ]),

    selector('body',[
        display('block'),
        margin('rem',0,0,0,0)
    ]),

    selector('nav', [
        display('flex'),
        flexDirection('row'),
        flexWrap('wrap'),
        backgroundColor(darkgrey),
    ])
])

export default sheet;
