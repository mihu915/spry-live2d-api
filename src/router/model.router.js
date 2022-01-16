const Router = require('koa-router')
const modelRouter = new Router({ prefix: '/model' })
const {
  getLive2dModelById,
  getModelListData,
  getNextModelById
} = require('../controller/model.controller')
const { handleModelParams } = require('../middleware/model.middleware')
modelRouter.get('/list', getModelListData)
modelRouter.get('/get', handleModelParams, getLive2dModelById)
modelRouter.get('/next', handleModelParams, getNextModelById)
module.exports = modelRouter
