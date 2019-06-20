const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const routers = require('./routers/index');
const app = new Koa();
const config = {
    port:'8000'
}
app.use(bodyParser());
app.use(routers.routes()).use(routers.allowedMethods());
app.listen( config.port )
console.log(`the server is start at port ${config.port}`)