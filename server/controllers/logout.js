const response = require('../models/response');
module.exports = async (ctx) => {
  console.log(99)
  ctx.cookies.set(
    'userId',
    null);
  const responseData = {
    success: true,
    data: {
      code: 1
    },
    msg: 'logout ok'
  };
  ctx.body = response(responseData);
};