"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IdentifierBag {
    constructor() {
        this.size = 0;
        this.bag = [];
    }
    append(identifer) {
        this.bag.push(identifer);
        this.size++;
    }
    filterNull() {
        this.bag = this.bag.flat(2).filter(Boolean).flat();
    }
}
exports.IdentifierBag = IdentifierBag;
//# sourceMappingURL=IdentifierBag.js.map