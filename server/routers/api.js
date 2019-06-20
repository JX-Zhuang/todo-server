const router = require('koa-router')();
const list = require('../controllers/list');
const register = require('../controllers/register');
const login = require('../controllers/login');
const logout = require('../controllers/logout');
const user = require('../controllers/user');
module.exports = router
    .post('/user',user)
    .post('/register', register)
    .post('/login',login)
    .get('/logout',logout)
    .get('/getList', list.getList)
    .post('/save',list.save)
    .delete('/detail/:id',list.remove)
    .put('/detail/:id',list.update)
    .get('/detail/:id',list.detail)