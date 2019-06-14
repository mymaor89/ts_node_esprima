"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const esprima = require("esprima");
const Class_1 = require("../../source/name_extraction/Rules/Class");
const Identifier_1 = require("../../source/name_extraction/Identifier");
describe("recognize class", () => {
    describe('#extract', () => {
        it('extracts a class from a class declaration', () => {
            ['class User {}'].forEach(declaration => {
                const identifyer = new Class_1.Class(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.have.property('name', 'User');
                chai_1.expect(identifyer).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer).to.have.property('type', Identifier_1.IdentifierType.Class);
            });
        });
        it('extracts a class and method from a class declaration', () => {
            ['class User {sayHi(param1) {}}'].forEach(declaration => {
                const identifyer = new Class_1.Class(createNode(declaration)).extract();
                chai_1.expect(identifyer[0]).to.have.property('name', 'param1');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.Parameter);
                chai_1.expect(identifyer[1]).to.have.property('name', 'sayHi');
                chai_1.expect(identifyer[1]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[1]).to.have.property('type', Identifier_1.IdentifierType.Method);
                chai_1.expect(identifyer[2]).to.have.property('name', 'User');
                chai_1.expect(identifyer[2]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[2]).to.have.property('type', Identifier_1.IdentifierType.Class);
            });
        });
        it('extracts a class with constructor,property and method with param', () => {
            ['class User {constructor(name) { this._name = name;}sayHi(param1) {}}'].forEach(declaration => {
                const identifyer = new Class_1.Class(createNode(declaration)).extract();
                chai_1.expect(identifyer[0]).to.have.property('name', 'name');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.Parameter);
                chai_1.expect(identifyer[1]).to.have.property('name', '_name');
                chai_1.expect(identifyer[1]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[1]).to.have.property('type', Identifier_1.IdentifierType.Property);
                chai_1.expect(identifyer[2]).to.have.property('name', 'param1');
                chai_1.expect(identifyer[2]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[2]).to.have.property('type', Identifier_1.IdentifierType.Parameter);
                chai_1.expect(identifyer[3]).to.have.property('name', 'sayHi');
                chai_1.expect(identifyer[3]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[3]).to.have.property('type', Identifier_1.IdentifierType.Method);
                chai_1.expect(identifyer[4]).to.have.property('name', 'User');
                chai_1.expect(identifyer[4]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[4]).to.have.property('type', Identifier_1.IdentifierType.Class);
            });
        });
        it('does not extracts a class from a node that do not contains a class identifyer', () => {
            ['person.name = function () {}', 'firstName: "moshe"'].forEach(declaration => {
                const identifyer = new Class_1.Class(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.false;
            });
        });
    });
});
function createNode(expression) {
    return esprima.parseScript(expression).body.pop();
}
//# sourceMappingURL=conform-class.spec.js.map