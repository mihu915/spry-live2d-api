const path = require('path')
const fs = require('fs')
const { paramsInit } = require('../utils/params-init')
function MhGlobalMiddleware(app, handleError) {
  // 注册错误处理中间件
  app.on('error', handleError)
  const filePath = path.join(__dirname, '../app/model-list.json')
  const modelList = fs.readFileSync(filePath)

  // 保存模型列表数据
  app.context.modelList = JSON.parse(modelList)

  // 挂载全局的提交error的方法
  app.context.emitError = function (errorType) {
    this.throw(errorType)
  }

  // 全局中间件
  return async function (ctx, next) {
    paramsInit(ctx)

    try {
      await next()
    } catch (error) {
      return ctx.app.emit('error', error, ctx)
    }
  }
}

module.exports = {
  MhGlobalMiddleware
}
