export default class ContextStrategy{
    constructor(dbStrategy){
        this._dbStrategy = dbStrategy
    }

    async conect(){
        return this._dbStrategy.conect()
    }

    async create(item){
        return this._dbStrategy.create(item)
    }

    async read(item) {
        return this._dbStrategy.read(item)
    }
}