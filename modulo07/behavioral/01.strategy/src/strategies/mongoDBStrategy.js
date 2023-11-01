import MongoDB from 'mongodb'
import ContextStrategy from '../base/contextStrategy.js'
export default class mongoDBStrategy{
    #instance
    constructor(connectionString){

        const { pathname: dbName} = new URL(connectionString)
        this._connectionString = connectionString.replace(dbName, '')
        this._db = dbName.replace(/\W/, '')
        this._collecttion = 'warrios'
    }

    async conect(){
        console.log('conectado ao mongo', this._connectionString)
        const client = new MongoDB.MongoClient(this._connectionString)

        await client.connect()
        const db = client.db(this._db).collection(this._collecttion)
        this.#instance = db

    }

    async create(item){
        return this.#instance.insertOne(item)
    }

    async read() {
        return this.#instance.find().toArray()
    }
}