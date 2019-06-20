const user = require('../models/user');
module.exports = async (ctx) => {
    const id = ctx.cookies.get('userId');
    const response = user(id);
    console.log('user',id);
    ctx.body = response;
};