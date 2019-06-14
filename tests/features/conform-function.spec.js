"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var esprima = require("esprima");
var Identifier_1 = require("../../source/name_extraction/Identifier");
var Function_1 = require("../../source/name_extraction/Rules/Function");
describe("recognize function", function () {
    describe('#extract', function () {
        it('extracts a function from a function declaration *with no params*', function () {
            ['function myFunc() {}'].forEach(function (declaration) {
                var identifyer = new Function_1.Function(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.have.property('name', 'myFunc');
                chai_1.expect(identifyer).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer).to.have.property('type', Identifier_1.IdentifierType.Function);
            });
        });
        it('extracts a function with it\'s parameter from function decleration', function () {
            ['function myFunc(param1) {}'].forEach(function (declaration) {
                var identifyer = new Function_1.Function(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.an('array').with.lengthOf(2);
                chai_1.expect(identifyer[0]).to.have.property('name', 'param1');
                chai_1.expect(identifyer[1]).to.have.property('name', 'myFunc');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[1]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.Parameter);
                chai_1.expect(identifyer[1]).to.have.property('type', Identifier_1.IdentifierType.Function);
            });
        });
        it('extracts a function with multiple parameters from function decleration', function () {
            ['function myFunc(param1,param2) {}'].forEach(function (declaration) {
                var identifyer = new Function_1.Function(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.an('array').with.lengthOf(3);
                chai_1.expect(identifyer[0]).to.have.property('name', 'param1');
                chai_1.expect(identifyer[1]).to.have.property('name', 'param2');
                chai_1.expect(identifyer[2]).to.have.property('name', 'myFunc');
                chai_1.expect(identifyer[0]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[1]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[2]).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer[0]).to.have.property('type', Identifier_1.IdentifierType.Parameter);
                chai_1.expect(identifyer[1]).to.have.property('type', Identifier_1.IdentifierType.Parameter);
                chai_1.expect(identifyer[2]).to.have.property('type', Identifier_1.IdentifierType.Function);
            });
        });
        it('does not extracts a function from a node that do not contains a function identifyer', function () {
            ['person.name = function () {}', 'firstName: "moshe"'].forEach(function (declaration) {
                var identifyer = new Function_1.Function(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.false;
            });
        });
    });
});
function createNode(expression) {
    return esprima.parseScript(expression).body.pop();
}
//# sourceMappingURL=conform-function.spec.js.map