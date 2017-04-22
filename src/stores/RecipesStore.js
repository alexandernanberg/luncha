import { observable, action } from 'mobx'
import { v4 } from 'uuid'

class Ingredient {
  constructor(name, amount, unit) {
    this.name = name
    this.amount = amount
    this.unit = unit
  }
}

class Recipe {
  constructor(name, rating, image) {
    this.id = v4()
    this.name = name
    this.image = image
    this.rating = rating
    this.slug = name.toLowerCase()
    this.ingredients = [
      new Ingredient('Meat', 400, 'gram'),
      new Ingredient('Flour', 1, 'dl'),
    ]
  }
}

export class RecipesStore {
  @observable recipes = [
    new Recipe('Hälsosam tacos', 4, 'http://az616578.vo.msecnd.net/files/2016/07/18/636044104859117199985990752_tacos.jpg'),
    new Recipe('Vesuvio pizza', 5, 'http://static.sirpizzafranklinpark.com/img/pizza.jpg'),
    new Recipe('Lax med sesamfrön', 3, 'http://images.media-allrecipes.com/images/58748.jpg'),
    new Recipe('Hälsosam tacos', 4, 'http://az616578.vo.msecnd.net/files/2016/07/18/636044104859117199985990752_tacos.jpg'),
    new Recipe('Vesuvio pizza', 5, 'http://static.sirpizzafranklinpark.com/img/pizza.jpg'),
    new Recipe('Lax med sesamfrön', 3, 'http://images.media-allrecipes.com/images/58748.jpg'),
  ]
  @action getRecipeBySlug(slug) {
    return this.recipes.find(r => r.slug === slug)
  }
}

export default new RecipesStore()
