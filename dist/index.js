"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tree_1 = require("./name_extraction/Tree");
var SmokeTest;
(function (SmokeTest) {
    function HelloWorld() {
        const path = "./tests/resources/fake-file.js";
        // when
        const tree = new Tree_1.Tree(path);
        let bag = tree.collect();
        bag.filterNull();
        console.log(bag);
    }
    SmokeTest.HelloWorld = HelloWorld;
})(SmokeTest = exports.SmokeTest || (exports.SmokeTest = {}));
//# sourceMappingURL=index.js.map