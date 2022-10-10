/**
 * An AuraJS stylesheet. This can be used to create a new AuraJS stylesheet which in turn can be converted back to CSS.
 */
class StyleSheet {
    public styles:Array<Function>;

    constructor(styles:Array<any>) {
        this.styles = styles
    }
}

export default StyleSheet;