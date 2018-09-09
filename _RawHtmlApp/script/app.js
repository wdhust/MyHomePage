import { addNumber } from "D:/Code/GitHub/MyHomePage/_RawHtmlApp/script/myJsLib.js";

console.log("app.js is executing...");

$("#btnAdd").click(() => {
    const x = Number($("#inputX").prop("value"));
    const y = Number($("#inputY").prop("value"));
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);

    const z = addNumber(x + y);
    //const z = x + y;
    console.log(`result = ${z}`);

    $("#divResult").html(z);
});

const f = () => {
    const x = Number($("#inputX").prop("value"));
    const y = Number($("#inputY").prop("value"));
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);

    const z = addNumber(x + y);
    //const z = x + y;
    console.log(`result = ${z}`);

    $("#divResult").html(z);
};

f();

function g() {
    const x = Number($("#inputX").prop("value"));
    const y = Number($("#inputY").prop("value"));
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);

    const z = addNumber(x + y);
    //const z = x + y;
    console.log(`result = ${z}`);

    $("#divResult").html(z);
}

g();

const a = 11;
const b = 22;
const c = addNumber(a + b);
console.log(`result = ${c}`);

console.log("app.js Done!");

