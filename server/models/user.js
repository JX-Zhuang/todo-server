const users = require('../db/user');
const response = require('./response');
const code = {
    user: 1,
    noUser: 0
};
module.exports = (id) => {
    const user = users.find(user => user.id === id);
    let responseData = {};
    if (user) {
        // login[user.id] = true;
        responseData = {
            success: true,
            data: {
                code: code.user,
                ...user
            },
            msg: 'get user ok'
        };
    } else {
        responseData = {
            success: false,
            data: {
                code: code.wrongUsername
            },
            msg: 'no user'
        }
    }
    return response(responseData);
}