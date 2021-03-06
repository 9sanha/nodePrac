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
    //TODO: findOne
    findByEmail = async (email)=>{
        return User.findAll({
            attributes:['id'],
            where:{
                email:email
            }
        })
    }
    //TODO: findOne
    findByUserId = (userId)=>{
        return User.findAll({
            attributes:['id','userId','password'],
            where:{
                userId:userId
            }
        })
    }
}

module.exports = new UserRepository()