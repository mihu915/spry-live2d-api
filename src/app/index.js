const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const cors = require('koa2-cors')

const { accessLogger } = require('./logger')
const { handleError } = require('../error/handle-error')
const { MhGlobalMiddleware } = require('../middleware/global.middleware')
const autoRegisterRouter = require('../router')

const { PUBLIC_RESOURCE_PATH } = require('./config')

const app = new Koa()

app.use(cors())
app.use(accessLogger())
app.use(static(PUBLIC_RESOURCE_PATH))
app.use(bodyParser())
app.use(MhGlobalMiddleware(app, handleError))
autoRegisterRouter(app)
module.exports = app
