import { Rules } from './Rules';
import { Identifier } from '../Identifier';
export declare class MethodExpression extends Rules {
    protected conforms(): boolean;
    handle(): Identifier | Identifier[];
}
