const users = require('../db/user');
const createId = require('../utils/createId');
const list = require('../db/list');
const response = require('./response');
const add = ({ title, detail, userId }) => {
    const id = createId();
    list.push({
        title,
        detail,
        userId,
        id
    });
    return response({
        success: true,
        data: {
            code: 1,
            id
        },
        msg: 'add ok'
    });
};
const remove = ({ id, userId }) => {
    const code = {
        noItem: 0,
        remove: 1,
        authority: 2
    };
    let index = null;
    let responseData = {};
    for (let i = 0; i < list.length; i++) {
        if (id === list[i].id) {
            index = i;
            break;
        }
    }
    if (index !== null) {
        if (list[index].userId === userId) {
            list.splice(index, 1);
            responseData = {
                success: true,
                data: {
                    code: code.remove
                },
                msg: 'delete ok'
            };
        } else {
            responseData = {
                success: false,
                data: {
                    code: code.authority
                },
                msg: 'no authority'
            };
        }
    } else {
        responseData = {
            success: false,
            data: {
                code: code.noItem
            },
            msg: 'no this item'
        }
    }
    return response(responseData);
};
const update = ({ id, detail, title, userId }) => {
    const item = list.find(item => item.id === id);
    const code = {
        noItem: 0,
        update: 1,
        authority: 2
    };
    let data;
    if (item) {
        if (item.userId === userId) {
            item.title = title;
            item.detail = detail;
            data = {
                success: true,
                data: {
                    code: code.update
                },
                msg: 'update ok'
            };
        } else {
            data = {
                success: false,
                data: {
                    code: code.authority
                },
                msg: 'no authority'
            };
        }
    } else {
        data = {
            success: false,
            data: {
                code: code.noItem
            },
            msg: 'no this item'
        };
    }
    return response(data);
};
const find = (userId) => {
    console.log(userId)
    return response({
        success: true,
        data: {
            list: list.filter(item => item.userId === userId)
        },
        msg: 'ok'
    });
}
const detail = (id) => {
    return response({
        success: true,
        data: {
            ...list.find(item => item.id === id)
        },
        msg: 'ok'
    });
}
module.exports = {
    add, remove, update, find, detail
}