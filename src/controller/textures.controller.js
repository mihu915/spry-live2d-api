const { getModelData } = require('../utils/get-model-data')
const { handleModelData } = require('../utils/handle-model-data')
class TexturesController {
  async getNextTexturesById(ctx) {
    const { model_id, textures_id } = ctx.request.query
    const { models } = ctx.modelList
    let nextTextures = parseInt(textures_id) + 1
    if (nextTextures > models[model_id].length - 1) {
      nextTextures = 0
    }

    const modelData = getModelData(
      `${models[model_id][nextTextures]}/index.json`
    )
    
    handleModelData(models[model_id][nextTextures], modelData)

    ctx.body = modelData
  }
}
module.exports = new TexturesController()
