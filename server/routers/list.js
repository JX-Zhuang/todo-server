const router = require('koa-router')();
const list = require('../controllers/list');
module.exports = router
  .get('/getList', list.getList)
//   .delete('/delete',lis)