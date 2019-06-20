const login = require('../models/login');
module.exports = async (ctx) => {
  const data = ctx.request.body
  const response = login(data);
  if(response.data.code===1){
    console.log('login',response);
    ctx.cookies.set(
      'userId', 
      response.data.id,
      {
        domain: 'localhost',     
        maxAge: 1000 * 6000 * 1000, 
        httpOnly: false,  
        overwrite: false  
      }
    )
  }
  ctx.body = response;
};