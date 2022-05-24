const userRepository = require('./UserRepository')

class UserService {
    signup = async (body)=>{
        // TODO: 비밀번호 암호화 
        const user = await userRepository.save(body);
        return user
    }
}

module.exports = new UserService();