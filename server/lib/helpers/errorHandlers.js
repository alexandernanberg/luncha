const APIError = require('./APIError')

// Catch errors from async/await
exports.catchErrors = fn => (req, res, next) => fn(req, res, next).catch(next)

// 404 handler
exports.notFound = (req, res, next) => {
  const err = new APIError('Not found', 404)

  return next(err)
}

// Development error handler
exports.developmentErrors = (err, req, res) => {
  const { status = 500 } = err
  res.status(status)
  res.json({
    success: false,
    message: err.message,
    status,
    stack: err.stack,
  })
}

// Production error handler
exports.productionErrors = (err, req, res) => {
  const { status = 500 } = err
  res.status(status)
  res.json({
    success: false,
    message: err.message,
    status,
    error: {},
  })
}
