const UserRepository = require("../repository/UserRepository")
const UserService = require("../service/userService")
const Database = require("../util/database")

class UserFactory{
    static async createInstace(){
        const db = new Database({ connectionString: 'mongodb://localhost'})
        const dbConnection = await db.connect()
        const userRepository = new UserRepository({ dbConnection })
        const userService = new UserService({ userRepository })

        return userService
    }
}

module.exports = UserFactory