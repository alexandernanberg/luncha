const mongoose = require('mongoose')
const APIError = require('../helpers/APIError')

const Recipe = mongoose.model('Recipe')

exports.getRecipes = async (req, res) => {
  const page = req.params.page || 1
  const limit = 10
  const skip = page * limit - limit

  const recipesPromise = Recipe.find()
    .skip(skip)
    .limit(limit)
    .sort({ created: 'desc' })

  const recipeCountPromise = Recipe.countDocuments()

  const [stores, count] = await Promise.all([
    recipesPromise,
    recipeCountPromise,
  ])
  const pages = Math.ceil(count / limit)

  res.json({
    success: true,
    pages,
    count,
    entities: stores,
  })
}

exports.getRecipeBySlug = async (req, res, next) => {
  const recipe = await Recipe.findOne({ slug: req.params.slug })
  if (!recipe) return next()

  return res.json({ success: true, entity: recipe })
}

const checkUserPermission = async (id, user) => {
  const recipe = await Recipe.findOne({ _id: id })

  if (!recipe) throw new APIError('Not found', 404)

  if (!recipe.author.equals(user._id)) {
    throw new APIError('Permission denied', 403)
  }
}

exports.createRecipe = async (req, res) => {
  // TODO: Validate body

  req.body.author = req.user._id
  const recipe = await new Recipe(req.body).save()

  res.json({
    success: true,
    entity: recipe,
  })
}

exports.updateRecipe = async (req, res) => {
  // TODO: Validate body

  await checkUserPermission(req.params.id, req.user)

  const recipe = await Recipe.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true },
  ).exec()

  res.json({
    success: true,
    entity: recipe,
  })
}

exports.deleteRecipe = async (req, res) => {
  await checkUserPermission(req.params.id, req.user)

  const recipe = await Recipe.findOneAndRemove({ _id: req.params.id }).exec()

  res.json({
    success: true,
    entity: recipe,
  })
}
