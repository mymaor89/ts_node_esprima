"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rules_1 = require("./Rules");
const Identifier_1 = require("../Identifier");
class MethodExpression extends Rules_1.Rules {
    conforms() {
        /*
        X= {}
        X.someMethod= function(){
             console.log('someMethod')
        }
        X.someMethod()
        */
        return this.node.type === 'ExpressionStatement'
            && this.node.expression.type === 'AssignmentExpression'
            && this.node.expression.left.type === 'MemberExpression'
            && this.node.expression.right.type === 'FunctionExpression';
    }
    handle() {
        let assignment = (this.node.expression);
        return Identifier_1.Identifier.fromMethod(assignment.left.property.name);
    }
}
exports.MethodExpression = MethodExpression;
//# sourceMappingURL=MethodExpression.js.map