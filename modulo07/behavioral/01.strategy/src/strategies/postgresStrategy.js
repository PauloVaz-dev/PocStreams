import knex from 'knex'

export default class PostgresStrategy{
    #instance
    constructor(connectionString){
        this._connectionString = connectionString
        this._table = 'warriors'
    }

    async conect(){
        console.log('Contected postgres', this._connectionString)
        this.#instance = knex({
            client: 'pg',
            connection: this._connectionString
        })

        return this.#instance.raw('select 1+1 as result')
    }

    async create(item){
        return this.#instance
            .insert(item)
            .into(this._table)
    }

    async read() {
        return this.#instance
            .select()
            .from(this._table)
    }
}