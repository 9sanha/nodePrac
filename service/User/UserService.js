const userRepository = require('./UserRepository')

class UserService {
    signup = async (body)=>{
        // TODO: 비밀번호 암호화 
        const user = await userRepository.save(body);
        return user
    }

    check = async (target,value)=> {
        let user;
        if (target === "email"){
            user = await userRepository.findByEmail(value)
        }else{
            user = await userRepository.findByuserId(value)
        }
        if(user[0] !== undefined){
            return false
        }else return true
    }
}

module.exports = new UserService();