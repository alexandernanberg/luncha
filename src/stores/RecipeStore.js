import { computed, observable, action, toJS } from 'mobx'
import shortid from 'shortid'
import slugify from 'slugify'

class Ingredient {
  constructor(title, amount, unit) {
    this.id = shortid()
    this.title = title
    this.amount = amount
    this.unit = unit
  }
}

class Recipe {
  constructor(key, title, rating, time, servings, image) {
    this.id = key
    this.title = title
    this.image = image
    this.rating = rating
    this.time = time
    this.servings = servings
    this.slug = slugify(this.title).toLowerCase()
    this.ingredients = [
      new Ingredient('Köttfärs', 400, 'gram'),
      new Ingredient('Mjöl', 1, 'dl'),
      new Ingredient('Salt', 12, 'krm'),
      new Ingredient('Smör', 100, 'gram'),
      new Ingredient('Peppar', 4, 'krm'),
    ]
  }
}

export class Recipes {
  @observable recipes = observable.map({})
  @observable currentRecipeSlug = null

  constructor() {
    this.recipes = {
      [shortid()]: new Recipe('', 'Hamburgare med pommes', 4, 20, 4, 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?h=350&auto=compress&cs=tinysrgb'),
      [shortid()]: new Recipe('', 'Baconpasta med champinjoner och spenat', 4, 20, 4, 'https://images.pexels.com/photos/169743/pexels-photo-169743.jpeg?h=350&auto=compress&cs=tinysrgb'),
      [shortid()]: new Recipe('', 'Ungsbakad lax med sallad', 4, 20, 4, 'https://images.pexels.com/photos/8758/food-dinner-lemon-rice.jpg?h=350&auto=compress&cs=tinysrgb'),
      [shortid()]: new Recipe('', 'Hamburgare med pommes', 4, 20, 4, 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?h=350&auto=compress&cs=tinysrgb'),
      [shortid()]: new Recipe('', 'Baconpasta med champinjoner och spenat', 4, 20, 4, 'https://images.pexels.com/photos/169743/pexels-photo-169743.jpeg?h=350&auto=compress&cs=tinysrgb'),
      [shortid()]: new Recipe('', 'Ungsbakad lax med sallad', 4, 20, 4, 'https://images.pexels.com/photos/8758/food-dinner-lemon-rice.jpg?h=350&auto=compress&cs=tinysrgb'),
    }
  }

  @computed get entities() {
    return toJS(this.recipes)
  }
}

const store = new Recipes()
window.store = store

export default store
