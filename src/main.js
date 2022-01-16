const app = require('./app')
const config = require('./app/config')
app.listen(config.APP_PORT, config.APP_HOST, () => {
  console.log(`服务器启动成功，端口号为：${config.APP_PORT}`)
})
