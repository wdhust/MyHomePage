/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
define(["require", "exports", "./person"], function (require, exports, person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let clickCount = 0;
    function startup() {
        $("#buttonTest").click(() => {
            clickCount++;
            $("#h2Result").html(`App start up. You have clicked ${clickCount} times.`);
            const person = new person_1.Person("Jack");
            var greeting = person.sayHello(clickCount);
            $("#h3Greeting").html(greeting);
        });
    }
    exports.startup = startup;
});
//# sourceMappingURL=main.js.map