"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdentifierType;
(function (IdentifierType) {
    IdentifierType[IdentifierType["Variable"] = 0] = "Variable";
    IdentifierType[IdentifierType["Function"] = 1] = "Function";
    IdentifierType[IdentifierType["Class"] = 2] = "Class";
    IdentifierType[IdentifierType["Parameter"] = 3] = "Parameter";
    IdentifierType[IdentifierType["Method"] = 4] = "Method";
    IdentifierType[IdentifierType["Property"] = 5] = "Property";
    IdentifierType[IdentifierType["ArrowFunction"] = 6] = "ArrowFunction";
    IdentifierType[IdentifierType["Array"] = 7] = "Array";
    IdentifierType[IdentifierType["Object_Literal"] = 8] = "Object_Literal";
})(IdentifierType = exports.IdentifierType || (exports.IdentifierType = {}));
class Identifier {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    get hasName() {
        return this.name !== null && this.name.length > 0;
    }
    static fromClass(name) {
        return new this(name, IdentifierType.Class);
    }
    static fromFunction(name) {
        return new this(name, IdentifierType.Function);
    }
    static fromParameter(name) {
        return new this(name, IdentifierType.Parameter);
    }
    static fromProperty(name) {
        return new this(name, IdentifierType.Property);
    }
    static fromMethod(name) {
        return new this(name, IdentifierType.Method);
    }
    static fromVariable(name) {
        return new this(name, IdentifierType.Variable);
    }
    static fromArrowFunction(name) {
        return new this(name, IdentifierType.ArrowFunction);
    }
    static fromArray(name) {
        return new this(name, IdentifierType.Array);
    }
    static fromObjectLiteral(name) {
        return new this(name, IdentifierType.Object_Literal);
    }
}
exports.Identifier = Identifier;
//# sourceMappingURL=Identifier.js.map