const login = require('../db/login');
const users = require('../db/user');
const response = require('./response');
const code = {
    login:1,
    wrongUsername:0,
    wrongPassword:2
}
module.exports = ({username,password})=>{
    const user = users.find(user=>user.username===username);
    let responseData = {};
    if(user){
        if(user.password!==password){
            responseData = {
                success:false,
                data:{
                    code:code.wrongPassword
                },
                msg:'password is wrong'
            }
        }else{
            login[user.id] = true;
            responseData = {
                success:true,
                data:{
                    code:code.login,
                    id:user.id
                },
                msg:'login ok'
            } 
        }
    }else{
        responseData = {
            success:false,
            data:{
                code:code.wrongUsername
            },
            msg:'username is wrong'
        }
    }
    return response(responseData);
}