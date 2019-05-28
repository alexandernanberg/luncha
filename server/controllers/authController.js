const passport = require('passport')
const jwt = require('jsonwebtoken')
const APIError = require('../helpers/APIError')

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) return next(err)

    if (!user) {
      return next(new APIError('Unauthorized', 401))
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: '1d',
    })

    return res.json({ success: true, token })
  })(req, res, next)
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
