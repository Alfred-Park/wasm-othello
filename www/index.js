import { render } from "./public/js/render.js";

console.log("[INFO] Start loading WASM 🚀");
const wasm = import("../pkg").catch(console.error);
console.log("[INFO] End loading WASM ✅");

Promise.all([wasm]).then(async function (
    [{ make_othello }]) {
        {
            async function run() {
                let othello = make_othello();
                let canvas = document.getElementById("canv")
                render(canvas, othello)
            }
            run()
        }
});
