import { Rules } from './Rules';
import { Identifier, IdentifierType } from '../Identifier';
import { VariableDeclarator } from 'estree';
export declare class Variable extends Rules {
    protected varDecs: VariableDeclarator[];
    conforms(): boolean;
    handle(): Identifier | Identifier[];
    protected identifierType(declaration: VariableDeclarator): IdentifierType;
    static isLiteral(declaration: any): boolean;
    static isArray(declaration: any): boolean;
    static isFunction(declaration: any): boolean;
    static isArrowFunction(declaration: any): boolean;
    static isObjectExpression(declaration: any): boolean;
}
