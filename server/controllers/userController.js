const mongoose = require('mongoose')

const User = mongoose.model('User')

exports.validateRegister = async (req, res, next) => {
  // Name
  req.sanitizeBody('name')
  req.checkBody('name', 'Name is required.').notEmpty()

  // Email
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false,
  })
  req.checkBody('email', 'Email must be valid.').isEmail()

  // Password
  req.checkBody('password', 'Password is requred.').notEmpty()

  const errors = await req.validationErrors()

  if (errors) {
    return res.json({ success: false, errors })
  }

  return next()
}

exports.createUser = async (req, res, next) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
  })

  await User.register(user, req.body.password)

  next()
}

exports.profile = async (req, res) => {
  res.json(req.user)
}
