/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import { Person } from "./person";

let clickCount = 0;

function startup() {
    $("#buttonTest").click(() => {
        clickCount++;
        $("#h2Result").html(`App start up. You have clicked ${clickCount} times.`);

        const person = new Person("Jack");
        var greeting = person.sayHello(clickCount);
        $("#h3Greeting").html(greeting);
    });
}

export {startup};
