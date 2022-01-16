const handleModelData = (modelInfo, modelData) => {
  modelData.model = `../../${modelInfo}/` + modelData.model

  modelData.textures = modelData.textures.map(item => {
    return `../../${modelInfo}/` + item
  })

  Object.keys(modelData.motions).forEach(key => {
    modelData.motions[key] = modelData.motions[key].map(item => {
      return {
        file: `../../${modelInfo}/` + item.file
      }
    })
  })
  modelData.physics =
    modelData.physics && `../../${modelInfo}/` + modelData.physics

  modelData.pose = modelData.pose && `../../${modelInfo}/` + modelData.pose
}
module.exports = {
  handleModelData
}
