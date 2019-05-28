const passport = require('passport')
const jwt = require('jsonwebtoken')
const APIError = require('../helpers/APIError')

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) return next(err)

    if (!user) {
      return next(new APIError('Unauthorized', 401))
    }

    req.user = user

    return next()
  })(req, res, next)
}

exports.generateToken = (req, res) => {
  const payload = { id: req.user._id }
  const token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: '1d',
  })

  res.json({ success: true, token })
}

exports.authenticate = (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    if (err) return next(err)

    if (!user) {
      return next(new APIError('Unauthorized', 401))
    }

    req.user = user

    return next()
  })(req, res, next)
}
