import { computed, observable, action, toJS } from 'mobx'
import shortid from 'shortid'
import slugify from 'slugify'
import { database } from '../firebase'

class Ingredient {
  constructor(title, amount, unit) {
    this.id = shortid()
    this.title = title
    this.amount = amount
    this.unit = unit
  }
}

class Recipe {
  constructor({ key, title, slug, rating, time, image, servings }) {
    this.id = key
    this.title = title
    this.image = image
    this.rating = rating
    this.time = time
    this.servings = servings
    this.slug = slug
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
  ref = database.ref('recipes')

  constructor() {
    this.ref.on('value', (snapshot) => {
      const { entities } = snapshot.val()
      const recipes = Object.keys(entities).reduce((acc, key) => ({
        ...acc,
        [key]: new Recipe({ ...entities[key], key }),
      }), {})

      this.recipes = {
        ...this.entities,
        ...recipes,
      }
    })
  }

  @computed get entities() {
    return toJS(this.recipes)
  }

  @computed get currentEntityKey() {
    return Object.keys(this.entities)
      .find(key => this.entities[key].slug === this.currentRecipeSlug)
  }

  @action setCurrentRecipeSlug(slug) {
    this.currentRecipeSlug = slug
  }

  add(data) {
    const id = this.ref.child('entities').push().key
    this.update(id, {
      ...data,
      slug: slugify(data.title).toLowerCase(),
    })
  }

  update(id, data) {
    this.ref.child('entities').update({
      [id]: { ...data },
    })
  }

  delete(id) {
    this.ref.child('entities').child(id).remove()
  }
}

const store = new Recipes()
window.store = store

export default store
