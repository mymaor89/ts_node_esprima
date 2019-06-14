"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rules_1 = require("./Rules");
const Identifier_1 = require("../Identifier");
class Variable extends Rules_1.Rules {
    conforms() {
        return this.node.type === 'VariableDeclaration';
    }
    handle() {
        this.varDecs = this.node.declarations;
        let identifiers = [];
        this.varDecs.forEach((declaration) => {
            if ("name" in declaration.id) {
                identifiers.push(new Identifier_1.Identifier(declaration.id.name, this.identifierType(declaration)));
            }
        });
        return identifiers;
    }
    identifierType(declaration) {
        //**TypeScript TypeGuards!**
        //var x= 3 , let x = 4 , const x = 4;
        if (Variable.isLiteral(declaration))
            return Identifier_1.IdentifierType.Variable;
        //let arr = [1,2,3]
        else if (Variable.isArray(declaration)) {
            return Identifier_1.IdentifierType.Array;
        }
        //let y= function(){return true}
        else if (Variable.isFunction(declaration)) {
            return Identifier_1.IdentifierType.Function;
        }
        //let y= function(){return true}
        else if (Variable.isArrowFunction(declaration)) {
            return Identifier_1.IdentifierType.ArrowFunction;
        }
        else if (Variable.isObjectExpression) {
            return Identifier_1.IdentifierType.Object_Literal;
        }
        else {
            throw new Error("not Recognized");
        }
    }
    static isLiteral(declaration) {
        return declaration.init.type === 'Literal';
    }
    static isArray(declaration) {
        return declaration.init.type === 'ArrayExpression';
    }
    static isFunction(declaration) {
        return declaration.init.type == 'FunctionExpression';
    }
    static isArrowFunction(declaration) {
        return declaration.init.type === 'ArrowFunctionExpression';
    }
    static isObjectExpression(declaration) {
        return declaration.init.type === 'ObjectExpression';
    }
}
exports.Variable = Variable;
//# sourceMappingURL=Variable.js.map