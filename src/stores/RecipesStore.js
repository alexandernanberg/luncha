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
    new Recipe('Hamburgare med pommes', 4, 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
    new Recipe('Baconpasta', 5, 'https://static.pexels.com/photos/169743/pexels-photo-169743.jpeg'),
    new Recipe('Lax med sallad', 3, 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'),
    new Recipe('Grillspett', 3, 'https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg'),
    new Recipe('Grillad kyckling', 3, 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg'),
    new Recipe('Pizza', 3, 'https://images.pexels.com/photos/65132/pexels-photo-65132.jpeg'),
  ]
  @action getRecipeBySlug(slug) {
    return this.recipes.find(r => r.slug === slug)
  }
}

export default new RecipesStore()
