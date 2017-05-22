import { computed, observable, action, toJS } from 'mobx'
import { v4 } from 'uuid'
import slugify from 'slugify'
import { database } from '../firebase'

class Ingredient {
  constructor(title, amount, unit) {
    this.id = v4()
    this.title = title
    this.amount = amount
    this.unit = unit
  }
}

class Recipe {
  constructor(title, rating, time, image) {
    this.id = v4()
    this.title = title
    this.image = image
    this.rating = rating
    this.time = time
    this.servings = 4
    this.slug = slugify(title).toLowerCase()
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
  @observable recipes = observable.map({});
  ref = database.ref('recipes')

  constructor() {
    this.ref.on('value', (snapshot) => {
      this.recipes = snapshot.val().entities
    })
  }

  @computed get json() {
    return toJS(this.recipes)
  }

  @action getRecipeBySlug(slug) {
    return Object.values(this.json).find(entity => entity.slug === slug)
  }

  add(name) {
    const id = this.ref.push().key
    this.update(id, name)
  }

  update(id, name) {
    this.ref.update({ [id]: { name } })
  }

  del(id) {
    this.ref.child(id).remove()
  }
}

const store = new Recipes()
window.store = store

export default store
