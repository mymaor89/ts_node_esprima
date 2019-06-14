"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IdentifierBag_1 = require("./IdentifierBag");
//import { Variable } from './Rules/Variable'
const fs = require("fs");
const esprima = require("esprima");
const Variable_1 = require("./Rules/Variable");
const Function_1 = require("./Rules/Function");
const Class_1 = require("./Rules/Class");
class Tree {
    constructor(file) {
        this.rules = [Variable_1.Variable, Function_1.Function, Class_1.Class];
        this.code = fs.readFileSync(file, 'utf-8');
    }
    collect() {
        return this.traverse(new IdentifierBag_1.IdentifierBag());
    }
    extractNode(node) {
        return this.rules
            .map(rule => new rule(node))
            .map(rule => rule.extract());
    }
    traverse(bag) {
        esprima.parseModule(this.code, undefined, (node, meta) => {
            bag.append(this.extractNode(node));
        });
        return bag;
    }
}
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map