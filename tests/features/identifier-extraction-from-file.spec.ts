import { Tree } from "../../source/name_extraction/Tree";
import { expect } from "chai";
import { IdentifierBag } from "../../source/name_extraction/IdentifierBag";
import { Identifier, IdentifierType } from "../../source/name_extraction/Identifier";

describe.only("Extract from js file", () => {
    it("Reads from a file and extracts the identifiers", () => { 
        // given
        const path = "./tests/resources/fake-file.js"
        // when
        const tree = new Tree(path);
        let bag: IdentifierBag = tree.collect()
        bag.filterNull()
        console.log(bag)
        expect(bag).to.be.instanceOf(IdentifierBag)
        //expect(bag.size).to.be.equal(12)
    })
})
