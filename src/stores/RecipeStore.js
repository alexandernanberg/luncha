import { computed, observable, action, toJS } from 'mobx'
import axios from 'axios'
import shortid from 'shortid'

class Ingredient {
  constructor(title, amount, unit) {
    this.id = shortid()
    this.title = title
    this.amount = amount
    this.unit = unit
  }
}

class Recipe {
  constructor(data) {
    this.id = data._id // eslint-disable-line no-underscore-dangle
    this.title = data.name
    this.image = data.image
    this.rating = data.rating
    this.time = data.time
    this.servings = data.servings
    this.slug = data.slug
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

  @computed get entities() {
    return toJS(this.recipes)
  }

  @computed get currentEntityKey() {
    return Object.keys(this.entities)
      .find(key => this.currentRecipeSlug === this.entities[key].slug)
  }

  @action fetchRecipes() {
    axios('https://api.luncha.co/v1/recipes')
      .then(({ data }) => {
        const entities = data.entities.reduce((acc, entity) => {
          acc[entity._id] = new Recipe(entity) // eslint-disable-line no-underscore-dangle
          return acc
        }, {})

        this.recipes = {
          ...entities,
          ...this.entities,
        }
      })
      .catch(err => console.error(err))
  }
}

const store = new Recipes()
window.store = store

export default store
