"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const esprima = require("esprima");
const Variable_1 = require("../../source/name_extraction/Rules/Variable");
const Identifier_1 = require("../../source/name_extraction/Identifier");
describe("recognize variable", () => {
    describe('#extract', () => {
        it('extracts a variable from a variable declaration', () => {
            ['var x = 9', 'let x = 9', 'const x = 9'].forEach(declaration => {
                const identifyer = new Variable_1.Variable(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.an('array').with.lengthOf(1);
                chai_1.expect(identifyer[0]).to.have.property('name', 'x');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.Variable);
            });
        });
        it('extracts multiple variables from a variable list declartion', () => {
            ['var x = 9,y= 6', 'let x= 5, y =4 ', 'const x = 9, y = 3'].forEach(declaration => {
                const identifyer = new Variable_1.Variable(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.an('array').with.lengthOf(2);
                chai_1.expect(identifyer[0]).to.have.property('name', 'x');
                chai_1.expect(identifyer[1]).to.have.property('name', 'y');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[1]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.Variable);
                chai_1.expect(identifyer[1]).to.have.property('type', Identifier_1.IdentifierType.Variable);
            });
        });
        it('should extract Function decleration identifier ', () => {
            ['var x = function(){return true}'].forEach(declaration => {
                const identifyer = new Variable_1.Variable(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.an('array').with.lengthOf(1);
                chai_1.expect(identifyer[0]).to.have.property('name', 'x');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.Function);
            });
        });
        it('should extract Arrow Function decleration identifier ', () => {
            ['const add = (a, b) => a + b'].forEach(declaration => {
                const identifyer = new Variable_1.Variable(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.an('array').with.lengthOf(1);
                chai_1.expect(identifyer[0]).to.have.property('name', 'add');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.ArrowFunction);
            });
        });
        it('should extract array decleration identifier ', () => {
            ['var x = [1,2,3]'].forEach(declaration => {
                const identifyer = new Variable_1.Variable(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.an('array').with.lengthOf(1);
                chai_1.expect(identifyer[0]).to.have.property('name', 'x');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.Array);
            });
        });
        it('should extract object literal decleration identifier ', () => {
            ['var myObject = {  prop1: "hello",  prop2: "world"  }'].forEach(declaration => {
                const identifyer = new Variable_1.Variable(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.an('array').with.lengthOf(1);
                chai_1.expect(identifyer[0]).to.have.property('name', 'myObject');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.Object_Literal);
            });
        });
        it('can extracted a mixed decleration', () => {
            ['var x = 9,y= function(){return true},z=["hey","bye"]'].forEach(declaration => {
                const identifyer = new Variable_1.Variable(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.an('array').with.lengthOf(3);
                chai_1.expect(identifyer[0]).to.have.property('name', 'x');
                chai_1.expect(identifyer[1]).to.have.property('name', 'y');
                chai_1.expect(identifyer[2]).to.have.property('name', 'z');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[1]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[2]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.Variable);
                chai_1.expect(identifyer[1]).to.have.property('type', Identifier_1.IdentifierType.Function);
                chai_1.expect(identifyer[2]).to.have.property('type', Identifier_1.IdentifierType.Array);
            });
        });
        it('does not extracts a variable from a node that do not contains a variable identifyer', () => {
            ['person.name = function () {}', 'firstName: "moshe"'].forEach(declaration => {
                const identifyer = new Variable_1.Variable(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.false;
            });
        });
    });
});
function createNode(expression) {
    return esprima.parseScript(expression).body.pop();
}
//# sourceMappingURL=conform-variable.spec.js.map