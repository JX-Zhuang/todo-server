const users = require('../db/user');
const createId = require('../utils/createId');
const response = require('./response');
const code = {
    hasUser: 0,
    register: 1,
    wrongPassword: 2
}
module.exports = ({ username, password, checkPassword }) => {
    const user = users.find(user => user.username === username);
    let responseData = {};
    if (user) {
        responseData = {
            success: false,
            data: {
                code: code.hasUser
            },
            msg: 'user is registered'
        }
    } else {
        if (password !== checkPassword) {
            responseData = {
                success: false,
                data: {
                    code: code.wrongPassword
                },
                msg: 'password  is not same'
            } 
        } else {
            const user = {
                username,
                password,
                id: createId()
            };
            users.push(user);
            responseData = {
                success: true,
                data: {
                    code: code.register
                },
                msg: 'register ok'
            }
        }
    }
    return response(responseData);
}