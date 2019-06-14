import {Tree} from "./name_extraction/Tree";
import {IdentifierBag} from "./name_extraction/IdentifierBag";

export module SmokeTest{
    export  function HelloWorld(){
        const path = "./tests/resources/fake-file.js";
        // when
        const tree = new Tree(path);
        let bag: IdentifierBag = tree.collect();
        bag.filterNull();
        console.log(bag)
    }
}
