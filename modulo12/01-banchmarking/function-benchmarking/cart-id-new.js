import { randomUUID} from 'crypto'

export default class CartNew{
    constructor(){
        this.id = randomUUID()
    }
}