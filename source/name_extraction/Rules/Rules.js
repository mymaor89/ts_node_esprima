"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rules {
    constructor(node) {
        this.node = node;
        this.declaration = `${this.constructor.name}Declaration`; //Template literal (ES6)
    }
    conforms() {
        return this.node.type === this.declaration;
    }
    extract() {
        if (this.conforms())
            return this.handle();
        else
            return false;
    }
}
exports.Rules = Rules;
//# sourceMappingURL=Rules.js.map