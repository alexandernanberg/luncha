const mongoose = require('mongoose')
const validator = require('validator')
const md5 = require('md5')
const passportLocalMongoose = require('passport-local-mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Invalid email address'],
      required: 'Email address is required',
    },
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
    },
    favorites: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Recipe',
      },
    ],
    created: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

UserSchema.virtual('gravatar').get(function getGravatar() {
  const hash = md5(this.email)
  return `https://gravatar.com/avatar/${hash}`
})

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameUnique: true,
})

UserSchema.plugin(mongodbErrorHandler)

module.exports = mongoose.model('User', UserSchema)
