const Router = require('koa-router')
const texturesRouter = new Router({ prefix: '/textures' })

const { getNextTexturesById } = require('../controller/textures.controller')
const { handleModelParams } = require('../middleware/model.middleware')
texturesRouter.get('/next', handleModelParams, getNextTexturesById)

module.exports = texturesRouter
