class ModelMiddleware {
  async handleModelParams(ctx, next) {
    const { models } = ctx.modelList
    const { model_id, textures_id } = ctx.request.query
    if (model_id === undefined) ctx.request.query.model_id = 0
    if (textures_id === undefined) ctx.request.query.textures_id = 0
    if (!models[ctx.request.query.model_id]) ctx.request.query.model_id = 0
    if (!models[ctx.request.query.model_id][ctx.request.query.textures_id]) {
      ctx.request.query.textures_id = 0
    }

    if (ctx.request.query.model_id > models.length - 1) {
      ctx.request.query.model_id = 0
    } else {
      if (
        ctx.request.query.textures_id >
        models[ctx.request.query.model_id].length - 1
      ) {
        ctx.request.query.textures_id = 0
      }
    }
    ctx.request.query.modelInfo =
      models[ctx.request.query.model_id][ctx.request.query.textures_id]
    await next()
  }
}

module.exports = new ModelMiddleware()
