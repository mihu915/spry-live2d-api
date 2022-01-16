const { getModelData } = require('../utils/get-model-data')
const { handleModelData } = require('../utils/handle-model-data')

class ModelController {
  async getModelListData(ctx) {
    ctx.body = {
      code: 200,
      data: {
        modelList: ctx.modelList,
        modelCount: ctx.modelList.models.length
      },
      message: '获取模型列表成功'
    }
  }
  async getLive2dModelById(ctx) {
    const { model_id, textures_id, modelInfo } = ctx.request.query
    const { models } = ctx.modelList

    let modelData = getModelData(`${models[model_id][textures_id]}/index.json`)
    handleModelData(modelInfo, modelData)

    ctx.body = modelData
  }

  async getNextModelById(ctx) {
    const { model_id } = ctx.request.query
    const { models } = ctx.modelList
    let nextModelId = parseInt(model_id) + 1
    if (nextModelId > models.length - 1) nextModelId = 0

    const modelInfo = models[nextModelId][0]
    let modelData = getModelData(`${models[nextModelId][0]}/index.json`)
    handleModelData(modelInfo, modelData)
    
    ctx.body = modelData
  }
}

module.exports = new ModelController()
