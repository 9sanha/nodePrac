const { User } = require('../../schema/Users')

class UserRepository{
    
    save = (user)=>{
        
        return User.create({
            userId: user.userId,
            password:user.password,
            name: user.name,
            email:user.email
        })
    }
    findByEmail = async (email)=>{
        return User.findOne({ email: email })
    }
    findByUserId = (userId)=>{
        return User.findOne({ userId: userId })
    }
}

module.exports = new UserRepository()