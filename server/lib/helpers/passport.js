const mongoose = require('mongoose')
const passport = require('passport')
const passportJWT = require('passport-jwt')

mongoose.Promise = global.Promise
const { ExtractJwt } = passportJWT
const JwtStrategy = passportJWT.Strategy

const User = mongoose.model('User')

passport.use(User.createStrategy())
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    },
    async (payload, done) => {
      const user = await User.findOne({ _id: payload.id })

      if (!user) {
        return done(null, false)
      }

      return done(null, user)
    },
  ),
)

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
