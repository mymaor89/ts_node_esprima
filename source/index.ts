import {Tree} from "./name_extraction/Tree";
import {IdentifierBag} from "./name_extraction/IdentifierBag";


 function HelloWorld(){
        const path = "./tests/resources/fake-file.js";
        const tree = new Tree(path);
        let bag: IdentifierBag = tree.collect();
        bag.filterNull();
        console.log(bag)
    }

HelloWorld();
