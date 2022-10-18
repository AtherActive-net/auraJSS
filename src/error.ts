export class StyleError extends Error {
    constructor(style,parent) {
        if(!parent) parent = 'StyleSheet';
        let message = `Style found after a selector. This is not allowed.\n\nFix: Move style inside selector.\nAfter: '${parent}' => ${JSON.stringify(style)}\n`;
        super(message);
        this.name = "StyleError";
    }
}

export class ParameterError extends Error {
    constructor() {
        let message = `Parameter was found to be undefined. Did you provide an empty object?\n\nFix: Provide a valid object.\n`;
        super(message);
        this.name = "ParameterError";
    }
}

export class CompileError extends Error {
    constructor(message:string) {
        let formatted = `An error occured while compiling the stylesheet.\n\n${message}\n`;
        super(formatted);
        this.name = "CompileError";
    }
}