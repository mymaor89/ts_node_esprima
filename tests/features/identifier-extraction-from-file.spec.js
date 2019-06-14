"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tree_1 = require("../../source/name_extraction/Tree");
const chai_1 = require("chai");
const IdentifierBag_1 = require("../../source/name_extraction/IdentifierBag");
describe.only("Extract from js file", () => {
    it("Reads from a file and extracts the identifiers", () => {
        // given
        const path = "./tests/resources/fake-file.js";
        // when
        const tree = new Tree_1.Tree(path);
        let bag = tree.collect();
        bag.filterNull();
        console.log(bag);
        chai_1.expect(bag).to.be.instanceOf(IdentifierBag_1.IdentifierBag);
        //expect(bag.size).to.be.equal(12)
    });
});
//# sourceMappingURL=identifier-extraction-from-file.spec.js.map