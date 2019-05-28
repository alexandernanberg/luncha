const mongoose = require('mongoose')
const dotenv = require('dotenv')
const chalk = require('chalk')

// Load env
dotenv.config()

// DB connection
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
mongoose.connection.on('error', err => {
  console.error(`${chalk.red('Error')} ${err.message}`)
})

// Models
require('./models/User')
require('./models/Recipe')

// App
const app = require('./app')

// Port
app.set('port', process.env.PORT || 8080)

// Listen
const server = app.listen(app.get('port'), () => {
  console.log(`> Ready on http://localhost:${server.address().port}`)
})
