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
        if(user[0] !== undefined){
            return false
        }else return true
    }

    signin = async(reqUser)=>{

        const data = await userRepository.findByUserId(reqUser.userId)
    
        if(data[0] === undefined){
            //TODO
            console.error('아이디 없음');
            return false;
        }else{
            const user = data[0]['dataValues']
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