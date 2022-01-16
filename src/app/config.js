const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

const PUBLIC_RESOURCE_PATH = path.join(__dirname, '..') + '/model/'
const { APP_HOST, APP_PORT } = process.env

module.exports = {
  APP_HOST,
  APP_PORT,
  PUBLIC_RESOURCE_PATH
}
