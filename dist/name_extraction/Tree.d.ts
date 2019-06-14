import { IdentifierBag } from './IdentifierBag';
import { Identifier } from './Identifier';
import { Node } from 'estree';
export declare class Tree {
    code: string;
    protected rules: any[];
    constructor(file: string);
    collect(): IdentifierBag;
    protected extractNode(node: Node): Identifier | Identifier[];
    private traverse;
}
