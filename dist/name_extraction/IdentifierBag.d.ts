import { Identifier } from "./Identifier";
export declare class IdentifierBag {
    protected bag: any[];
    size: number;
    constructor();
    append(identifer: Identifier | Identifier[]): void;
    filterNull(): void;
}
