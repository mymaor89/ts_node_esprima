import { Identifier } from "../Identifier";
import { Node } from "estree";
export declare abstract class Rules {
    protected readonly node: Node;
    constructor(node: Node);
    protected declaration: string;
    protected conforms(): boolean;
    abstract handle(): Identifier | Identifier[];
    extract(): Identifier | Identifier[] | boolean;
}
