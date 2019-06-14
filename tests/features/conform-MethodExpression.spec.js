"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var esprima = require("esprima");
var MethodExpression_1 = require("../../name_extracting/Rules/MethodExpression");
var Identifier_1 = require("../../source/name_extraction/Identifier");
describe("recognize Method expression", function () {
    describe('#extract', function () {
        it('extracts a method from a method expression', function () {
            [' myObject.somemethod = function(){}']
                .forEach(function (declaration) {
                var identifyer = new MethodExpression_1.MethodExpression(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.have.property('name', 'somemethod');
                chai_1.expect(identifyer).to.be.instanceOf(Identifier_1.Identifier);
                chai_1.expect(identifyer).to.have.property('type', Identifier_1.IdentifierType.Method);
            });
        });
        it('does not extracts a method from a node that do not contains a method', function () {
            ['x=4', 'firstName: "moshe"'].forEach(function (declaration) {
                var identifyer = new MethodExpression_1.MethodExpression(createNode(declaration)).extract();
                chai_1.expect(identifyer).to.be.false;
            });
        });
    });
});
function createNode(expression) {
    return esprima.parseScript(expression).body.pop();
}
//# sourceMappingURL=conform-MethodExpression.spec.js.map