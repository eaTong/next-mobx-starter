/**
 * Created by eatong on 17-11-7.
 */
const {checkArgument} = require('../framework/apiDecorator');
const {LogicError} = require('../framework/errors');

module.exports = class UserApi {

  // @checkArgument(['user', 'password'])
  static async login(ctx) {
    const data = ctx.request.body;
    if (data.user === '18288756143' && data.password === 'eatong123') {
      ctx.session.loginUser = data;
      return true;
    } else {
      throw (new LogicError('账号或密码错误'));
    }
  }
};
