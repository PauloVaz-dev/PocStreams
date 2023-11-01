import ContextStrategy from "./base/contextStrategy.js"
import MongoDBStrategy from "./strategies/mongoDBStrategy.js"
import PostgresStrategy from "./strategies/postgresStrategy.js"
import { randomUUID as uuidv4} from 'crypto'


const postgresConnectionString = "postgres://postgres:docker@localhost:5432/postgres"
const postgresContext = new ContextStrategy(new PostgresStrategy(postgresConnectionString))
await postgresContext.conect()

const mongoDBConnectionString = "mongodb://mongodb:docker@localhost:27017/test"
const mongoDBContext = new ContextStrategy(new MongoDBStrategy(mongoDBConnectionString))
await mongoDBContext.conect()


const data = [{
    name: 'erickwendel',
    type: 'transaction'
}, {
    name: 'mariasilva',
    type: 'activityLog'
}]

const contextTypes = {
    transaction: postgresContext,
    activityLog: mongoDBContext
}

for(const {type, name} of data) {
    const context = contextTypes[type]
    await context.create({ id: uuidv4(), name: name + Date.now()})
    
   
    console.log(await context.read())
}