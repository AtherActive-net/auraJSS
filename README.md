# AuraJSS - Styling with JavaScript made easy
```
Note: AuraJSS is still in active development. 
Some things may not work as expected and may change at any point.
```
AuraJSS is a library that allows you to create fully fledged stylesheets using Javascript. With a high focus on being dynamic, you can choose to compile to file, or to do it on the fly!

## But why?
Honestly, it started out as a small little fun project. This quickly became more serious though and is now being developed to be extremely usable and fast!

## Quickstart
First, you will need to install AuraJSS from NPM.
```bash
npm i aurajss --save-dev //If you only use it to compile to file
npm i aurajss // If you also want to compile on the fly.
```
With this quickstart we will use Typescript, but regular JS will obviously work as well.

### Creating a Stylesheet
For AuraJSS to function you need to create a new Stylesheet.
```ts
import { StyleSheet } from 'aurajss';

export default new Stylesheet{[]}
```
### Styling basics
An empty stylesheet is not exactly useful, so let's add some styles!
```ts
import { StyleSheet, selector, backgroundColor, RGB } from 'aurajss';

export default new Stylesheet{[
    selector('body',[
        backgroundColor(new RGB(10,10,10))
    ])
]};
```
Above we have added a selector which will select the `body` element. Then, we apply a `background color` to it using a new `RGB` value.
Note: You can choose to import each function from aurajss (an import with each one is below) or add them to a namespace with `import * as aurajss from 'aurajss'`.

### Compiling a Stylesheet
Okay, so we have a Stylesheet with some styles. Time to compile it to CSS! You can do this in the same file, or create a new file. For this example we will use the same one.
```ts
import { StyleSheet, selector, backgroundColor, RGB, compile } from 'aurajss';

// We replace the export with a const so it can be used in the compile function.
const sheet = new Stylesheet{[
    selector('body',[
        backgroundColor(new RGB(10,10,10))
    ])
]};

compile({
    input: sheet,
    output: './aurajss.css'
});
```
Now, if you run your script, it will start compiling the Stylesheet into CSS and (if everything goes correct) a new file will be created with the name present in `output`. You can disable writing to file by not providing an `output` path.

`compile` also returns a string containing the compiled CSS, so you can use that for something if you want to (ex. On the fly compilation).

## Resources
- [NPM](https://www.npmjs.com/package/aurajss)
- [Tutorials](https://github.com/AtherActive-net/auraJSS/blob/main/docs/tutorials.md)
- [API Reference](https://atheractive-net.github.io/auraJSS/index.html)
- [Massive import](https://noteit.atherdev.nl/note/2)
- [ATHER](https://atherdev.nl)

## Contributing
We are open to your contributions! Please make sure you keep to the same style we use (eslint config coming soon) and that you test your code before submitting a PR. Additionally, make sure it is properly documented.

### Setting up for contribution
Setup up for contribution is extremely simple, as we have 0 (direct) dependencies. However, to actually run your code having typescript installed globally is a good idea. You can do this with `npm i -g typescript`.

After that, just run `tsc` in the root of the project and you are good to go!

## Credits
Developed by [ATHER](https://atherdev.nl). Project is lead by [Saltylelele](https://github.com/AtherActive).