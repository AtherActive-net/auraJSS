import { compile } from "../app.js";

setTimeout(async () => {
    let test = await compile('./test/demo.js');
    console.log(test)
    console.log('done');
}, 100);