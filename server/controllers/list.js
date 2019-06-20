const list = require('../models/list');
module.exports = {
  getList: async (ctx) => {
    const userId = ctx.cookies.get('userId');
    ctx.body = list.find(userId);
  },
  save: async (ctx) => {
    const data = ctx.request.body;
    const userId = ctx.cookies.get('userId');
    ctx.body = list.add({...data,userId});
  },
  remove: async (ctx) => {
    const id = ctx.params.id;
    const userId = ctx.cookies.get('userId');
    ctx.body = list.remove({
      userId,
      id
    });
  },
  update: async (ctx) => {
    const data = ctx.request.body;
    const id = ctx.params.id;
    const userId = ctx.cookies.get('userId'); 
    ctx.body = list.update({ ...data, id ,userId});
  },
  detail: async (ctx) => {
    const id = ctx.params.id;
    ctx.body = list.detail(id);
  },
}