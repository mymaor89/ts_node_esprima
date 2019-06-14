import { Rules } from "./Rules";
import { Identifier } from "../Identifier";
export declare class Class extends Rules {
    protected conforms(): boolean;
    handle(): Identifier | Identifier[];
}
