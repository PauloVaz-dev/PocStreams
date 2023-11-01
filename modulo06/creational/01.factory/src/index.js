const UserFactory = require("./factory/userFactory");

;(async () =>{
    console.log('>>>')
    const userFactory = await UserFactory.createInstace()
    const result = await userFactory.find({ name: 'Paulo'})
    console.log('>>>', result)

})()