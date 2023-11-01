class UserRepository {
    constructor({ dbConnection: dbConnection }){
        this.dbConnection = dbConnection
    }

    async find(query){
        return this.dbConnection.find(query)
    }
}

module.exports = UserRepository