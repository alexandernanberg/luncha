const express = require('express')
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')
const recipeController = require('../controllers/recipeController')
const { catchErrors } = require('../helpers/errorHandlers')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    success: true,
  })
})

// Get recipes
router.get('/v1/recipes/:page*?', catchErrors(recipeController.getRecipes))

// Get recipes by slug
router.get('/v1/recipe/:slug', catchErrors(recipeController.getRecipeBySlug))

// Create recipe
router.post(
  '/v1/recipe',
  authController.authenticate,
  catchErrors(recipeController.createRecipe),
)

// Update recipe
router.put(
  '/v1/recipe/:id',
  authController.authenticate,
  catchErrors(recipeController.updateRecipe),
)

// Delete recipe
router.delete(
  '/v1/recipe/:id',
  authController.authenticate,
  catchErrors(recipeController.deleteRecipe),
)

// User register
router.post(
  '/v1/register',
  userController.validateRegister,
  catchErrors(userController.createUser),
  authController.login,
  authController.generateToken,
)

// User login
router.post('/v1/login', authController.login, authController.generateToken)

// User profile
router.post('/v1/profile', authController.authenticate, userController.profile)

module.exports = router
