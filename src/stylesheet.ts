/**
 * An AuraJS stylesheet. This can be used to create a new AuraJS stylesheet which in turn can be converted back to CSS.
 */
class StyleSheet {
    public styles:Array<Object>;

    constructor(styles:Array<Object>) {
        this.styles = styles
    }
}

export default StyleSheet;