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
            user = await userRepository.findByUserId(value)
        }
        console.log(user);
        if(user !== null){
            return false
        }else return true
    }

    signin = async(reqUser)=>{

        const user = await userRepository.findByUserId(reqUser.userId)

        if(user === null){
            //TODO
            console.error('아이디 없음');
            return false;
        }else{
            if (user.password !== reqUser.password){
                //TODO
                console.error('비번 다름');
                return false;
            }else {
                //TODO: jwt 토큰 발급
                return true
            }
        }      
    }
}

module.exports = new UserService();