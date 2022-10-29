# Tutorials
On this page we'll go over some basic tutorials to get you started! These will not go into detail about every function, but will give you a good idea of how to use AuraJSS.

## Quickstart
The quickstart guide can be found [here](https://github.com/AtherActive-net/auraJSS)

## Built-in functions
AuraJSS provides a few built-in functions that can take care of some common things. You can access these by importing `builtin` from `aurajss`. Let's take a look at some of them.

### generateGridSystem(breakpoints?, divisions?)
When you call this function (and provide a division count) it will generate a bootstrap-like grid system. You can also provide your own breakpoints and names for them. In the end you will by default get a flexbox grid system ranging from `xs` to `xxl` with containers and columns. Rows are obviously also included.

Note: To set your own divisions you will ahve to set the breakpoints too. The default breakpoints are exported by `builtin` and are called `defaultBreakPoints`.

### generateColorClasses(colors)
With this function you can let AuraJSS automatically generate `.color-[color]` classes for you by just providing an object with a key:value pair of colors. This one is specifically for text colors.

### generateBackgroundColorClasses(colors)
This function does pretty much the same as the above one, but now it generates `.bg-[color]` classes for you.

## Looping styles
AuraJSS does not provide a built-in loop function for the stylesheet as this would create a terrible developer experience. Instead, we allow other functions that are not provided by us to handle this task.

Let's create a quick demo. Below we will create a Stylesheet and also a loop function.
```ts
function loopDemo() {
    let out = [];
    for(let i=0; i<10;i++) {
        out.push([
            selector(`.loop-${i}`,[
                padding({
                    value: px(i)
                })
            ])
        ])
    }
    return out;
}

const sheet = new Stylesheet([
    loopDemo()
])
```
As you can see, we create a function that loops 10 times and creates a selector for each iteration. This selector also gains 1px of padding per loop cycle. Then we call the function in the Stylesheet which will include the styles when it is compiled.

This obviously is a very basic example, but it serves as a demo. You can do pretty much anything you want with it!

## Including stylesheets
You can include a stylesheet into another stylesheet! This is made extremely simple by using the `include` function. Let's create a quick demo.
```ts
const sheet1 = new Stylesheet([
    selector('body',[
        backgroundColor(new RGB(10,10,10))
    ])
])

const sheet2 = new Stylesheet([
    include(sheet1)
])
```
We have 2 stylesheets. One of them has a selector selecting the body, the other one only has the include. If we were to compile the second sheet it will gain anything that was inside the first stylesheet. 

You can also just have styles (no selectors) in the included stylesheet!