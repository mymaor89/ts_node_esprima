import { IdentifierBag } from './IdentifierBag'
import { Identifier } from './Identifier';
import { Rules } from './Rules/Rules'
//import { Variable } from './Rules/Variable'
import * as fs from 'fs'
import * as esprima from 'esprima'
//import { PropertyAsignment } from './Rules/PropertyAsignment';
//import { PropertySemicolon } from './Rules/PropertySemicolon';
//import { MethodExpression } from './Rules/MethodExpression';
//import { Class } from './Rules/Class';
import { Program, Node } from 'estree';
import {Variable} from "./Rules/Variable";
import {Function} from "./Rules/Function";
import {Class} from "./Rules/Class";


export class Tree {
    code: string;

    protected rules: any[] = [Variable,Function,Class];

    constructor(file: string) {
        this.code = fs.readFileSync(file, 'utf-8');
    }


    collect(): IdentifierBag {
        return this.traverse(new IdentifierBag());
    }


    protected extractNode(node: Node): Identifier | Identifier[] {
        return this.rules
            .map(rule => new rule(node))
            .map(rule => rule.extract())

    }

    private traverse(bag: IdentifierBag): IdentifierBag {
        esprima.parseModule(this.code, undefined, (node, meta) => {
            bag.append(this.extractNode(node))
        });
        return bag;
    }
}
