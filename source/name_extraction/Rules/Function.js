"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rules_1 = require("./Rules");
const Identifier_1 = require("../Identifier");
//function f(){}
class Function extends Rules_1.Rules {
    handle() {
        let identifiers = [];
        let functionDecleration = this.node;
        const { params, id } = functionDecleration;
        if (params.length != 0) {
            (params.forEach((param) => {
                if ('name' in param)
                    identifiers.push(Identifier_1.Identifier.fromParameter(param.name));
            }));
            // @ts-ignore
            identifiers.push(Identifier_1.Identifier.fromFunction(id.name));
            return identifiers;
        }
        // @ts-ignore
        return Identifier_1.Identifier.fromFunction(id.name);
    }
}
exports.Function = Function;
//# sourceMappingURL=Function.js.map