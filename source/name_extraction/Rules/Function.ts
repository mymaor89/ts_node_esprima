import {Rules} from './Rules'
import {Identifier} from '../Identifier'
import {FunctionDeclaration} from 'estree';

//function f(){}
export class Function extends Rules {
    handle(): Identifier | Identifier[] {
        let identifiers: Identifier[] = [];
        let functionDecleration:FunctionDeclaration = <FunctionDeclaration> this.node;
        const {params, id} = functionDecleration;
        if (params.length != 0) {
            (params.forEach((param) => {
                if ('name' in param)
                    identifiers.push(Identifier.fromParameter(param.name))
            }));
            // @ts-ignore
            identifiers.push(Identifier.fromFunction(id.name));
            return identifiers
        }
        // @ts-ignore
        return Identifier.fromFunction(id.name)

    }
}
