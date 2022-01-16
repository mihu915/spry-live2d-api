const path = require('path')
const fs = require('fs')

const getModelData = modelPath => {
  const modelJsonPath = path.join(__dirname, `../model/${modelPath}`)
  const modelData = JSON.parse(fs.readFileSync(modelJsonPath))
  return modelData
}

module.exports = {
  getModelData
}
