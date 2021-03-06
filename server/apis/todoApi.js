const {checkArgument} = require('../framework/apiDecorator');
const todoServer = require('../services/todoServer');


module.exports = class TodoApi {

  static async getTodo(ctx) {
    return await todoServer.findAllTodo();
  }

  // @checkArgument('name')
  static async addTodo(ctx) {
    const data = ctx.request.body;
    return await todoServer.addTodo(data.name);
  }

  // @checkArgument('_id')
  static async toggleTodo(ctx) {
    const data = ctx.request.body;
    return await todoServer.toggleTodo(data._id);
  }
}



