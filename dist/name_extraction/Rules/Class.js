"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rules_1 = require("./Rules");
const Identifier_1 = require("../Identifier");
class Class extends Rules_1.Rules {
    conforms() {
        return (this.node.type === this.declaration);
    }
    handle() {
        let identifiers = [];
        let class_body = this.node.body.body;
        if (class_body.length != 0) {
            for (let ele of class_body) {
                let params = ele.value.params;
                for (var param of params) {
                    if ('name' in param)
                        identifiers.push(Identifier_1.Identifier.fromParameter(param.name));
                    if (ele.kind === 'constructor') {
                        let members = ele.value.body.body;
                        for (var mem of members) {
                            if (mem.type === 'ExpressionStatement' &&
                                mem.expression.type === 'AssignmentExpression' &&
                                mem.expression.left.type === 'MemberExpression') {
                                if ('name' in mem.expression.left.property) {
                                    let mem_name = mem.expression.left.property.name;
                                    identifiers.push(Identifier_1.Identifier.fromProperty(mem_name));
                                }
                            }
                        }
                    }
                    else {
                        if ('name' in ele.key)
                            identifiers.push(Identifier_1.Identifier.fromMethod(ele.key.name));
                    }
                }
            }
            identifiers.push(Identifier_1.Identifier.fromClass(this.node.id.name));
            return identifiers;
        }
        else {
            return Identifier_1.Identifier.fromClass(this.node.id.name);
        }
    }
}
exports.Class = Class;
//# sourceMappingURL=Class.js.map