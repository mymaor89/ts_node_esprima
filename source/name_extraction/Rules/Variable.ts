import { Rules } from './Rules'
import { Identifier, IdentifierType } from '../Identifier'
import {
    ArrayExpression,
    ArrowFunctionExpression,
    Declaration, FunctionExpression,
    Literal, ObjectExpression,
    VariableDeclaration,
    VariableDeclarator
} from 'estree';

export class Variable extends Rules {

    protected varDecs: VariableDeclarator[];

    conforms(): boolean {
       return this.node.type === 'VariableDeclaration'
    }

    handle(): Identifier | Identifier[] {
        this.varDecs = (this.node as VariableDeclaration).declarations;
        let identifiers: Identifier[] = [];
        this.varDecs.forEach((declaration) => {
            if ("name" in declaration.id) {
                identifiers.push(new Identifier(declaration.id.name,
                     this.identifierType(declaration)))
            }

        });
             return identifiers
    }

    protected identifierType(declaration: VariableDeclarator): IdentifierType {
        //**TypeScript TypeGuards!**
        //var x= 3 , let x = 4 , const x = 4;
        if (Variable.isLiteral(declaration))
            return IdentifierType.Variable;
        //let arr = [1,2,3]
        else if (Variable.isArray(declaration)) {
            return IdentifierType.Array
        }
        //let y= function(){return true}

        else if (Variable.isFunction(declaration)) {
            return IdentifierType.Function
        }
        //let y= function(){return true}

        else if (Variable.isArrowFunction(declaration)) {
            return IdentifierType.ArrowFunction

        } else if (Variable.isObjectExpression) {
            return IdentifierType.Object_Literal
        }
        else {
            throw new Error("not Recognized")
        }
    }

    static isLiteral(declaration: any):boolean{
            return declaration.init.type === 'Literal'
    }
    static isArray(declaration: any):boolean{
        return declaration.init.type === 'ArrayExpression'
    }
    static isFunction(declaration: any):boolean{
        return declaration.init.type == 'FunctionExpression'
    }
    static isArrowFunction(declaration: any):boolean{
        return declaration.init.type === 'ArrowFunctionExpression'
    }
    static isObjectExpression(declaration: any):boolean{
        return declaration.init.type === 'ObjectExpression'
    }

}
