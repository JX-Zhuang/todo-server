const register = require('../models/register');
module.exports = async (ctx) => {
  const data = ctx.request.body;
  console.log(data);
  ctx.body = register(data);
};