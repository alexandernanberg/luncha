const mongoose = require('mongoose');
const slug = require('slug');

const RecipeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Please supply a name',
    },
    created: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
      trim: true,
    },
    slug: String,
    image: String,
    rating: Number,
    servings: Number,
    time: Number,
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: 'Please supply an author',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

RecipeSchema.pre('save', async function generateSlug(next) {
  if (!this.isModified('name')) {
    return next();
  }

  this.slug = slug(this.name, { lower: true });

  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const recipesWithSlug = await this.constructor.find({ slug: slugRegEx });

  if (recipesWithSlug.length) {
    this.slug = `${this.slug}-${recipesWithSlug.length + 1}`;
  }

  return next();
});

module.exports = mongoose.model('Recipe', RecipeSchema);
