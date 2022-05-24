const db =  require('../../models/index')
const User = db.Users
class UserRepository{
    
    save = (user)=>{
        return User.create({
            userId: user.userId,
            password:user.password,
            name: user.name,
            email:user.email
        })
    }
}

module.exports = new UserRepository()