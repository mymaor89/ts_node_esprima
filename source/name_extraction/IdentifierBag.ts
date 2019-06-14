import {Identifier} from "./Identifier";

export class IdentifierBag{
    protected bag: any[]
    public size: number = 0
    constructor() {
            this.bag = []
        }

    append(identifer :Identifier| Identifier[]) {
        this.bag.push(identifer)
        this.size++
    }


    public filterNull() {
        this.bag = this.bag.flat(2).filter(Boolean).flat()
   }
}

