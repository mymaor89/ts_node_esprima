export declare enum IdentifierType {
    Variable = 0,
    Function = 1,
    Class = 2,
    Parameter = 3,
    Method = 4,
    Property = 5,
    ArrowFunction = 6,
    Array = 7,
    Object_Literal = 8
}
export declare class Identifier {
    readonly name: string;
    readonly type: IdentifierType;
    constructor(name: string, type: IdentifierType);
    readonly hasName: boolean;
    static fromClass(name: string): Identifier;
    static fromFunction(name: string): Identifier;
    static fromParameter(name: string): Identifier;
    static fromProperty(name: string): Identifier;
    static fromMethod(name: string): Identifier;
    static fromVariable(name: string): Identifier;
    static fromArrowFunction(name: string): Identifier;
    static fromArray(name: string): Identifier;
    static fromObjectLiteral(name: any): Identifier;
}
