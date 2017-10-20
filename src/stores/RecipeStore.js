import { computed, observable, action, toJS } from 'mobx'
import axios from 'axios'
import { v4 } from 'uuid'
import { API } from '../constants'

class Ingredient {
  constructor(title, amount, unit) {
    this.id = v4()
    this.title = title
    this.amount = amount
    this.unit = unit
  }
}

class Recipe {
  constructor(data) {
    this.id = data.id
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

export class RecipeStore {
  @observable recipes = observable.map({})
  @observable currentRecipeSlug = null

  @computed get entities() {
    return toJS(this.recipes)
  }

  @computed get currentEntityKey() {
    return Object.keys(this.entities)
      .find(key => this.currentRecipeSlug === this.entities[key].slug)
  }

  @action
  fetchRecipes() {
    axios(`${API}/recipes`)
      .then(action(({ data }) => {
        const entities = data.entities.reduce((acc, entity) => {
          acc[entity.id] = new Recipe(entity)
          return acc
        }, {})

        this.recipes = {
          ...entities,
          ...this.entities,
        }
      }))
      .catch(err => console.error(err))
  }

  @action
  fetchRecipeBySlug(slug) {
    return axios(`${API}/recipe/${slug}`)
      .then(action(({ data }) => {
        this.recipes = {
          ...this.entities,
          [data.entity.id]: new Recipe(data.entity),
        }
      }))
      .catch(err => console.error(err))
  }
}

const store = new RecipeStore()

export default store
