import * as assert from "assert";
import {SmokeTest} from "../dist/index";
describe("index",()=>{
    it("should say Hello world!",()=>{
        SmokeTest.HelloWorld();
        assert.ok(true);
    })
})

