define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Person {
        constructor(name) {
            this._name = name;
        }
        sayHello(times) {
            return `Hello, I am ${this._name}, greeting ${times} times`;
        }
    }
    exports.Person = Person;
});
//# sourceMappingURL=person.js.map