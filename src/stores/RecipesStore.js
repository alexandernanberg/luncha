import { observable, action } from 'mobx'
import { v4 } from 'uuid'

class Ingredient {
  constructor(name, amount, unit) {
    this.id = v4()
    this.name = name
    this.amount = amount
    this.unit = unit
  }
}

class Recipe {
  constructor(name, rating, time, image) {
    this.id = v4()
    this.name = name
    this.image = image
    this.rating = rating
    this.time = time
    this.servings = 4
    this.slug = name.toLowerCase().replace(new RegExp(' ', 'g'), '-')
    this.ingredients = [
      new Ingredient('Köttfärs', 400, 'gram'),
      new Ingredient('Mjöl', 1, 'dl'),
      new Ingredient('Salt', 12, 'krm'),
      new Ingredient('Smör', 100, 'gram'),
      new Ingredient('Peppar', 4, 'krm'),
    ]
  }
}

export class RecipesStore {
  @observable recipes = [
    new Recipe('Hamburgare med pommes', 4, 30, 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg?h=350&auto=compress&cs=tinysrgb'),
    new Recipe('Baconpasta med champinjoner och spenat', 5, 60, 'https://static.pexels.com/photos/169743/pexels-photo-169743.jpeg?h=350&auto=compress&cs=tinysrgb'),
    new Recipe('Ungsbakad lax med sallad', 3, 25, 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?h=350&auto=compress&cs=tinysrgb'),
    new Recipe('Grillspett', 3, 30, 'https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg?h=350&auto=compress&cs=tinysrgb'),
    new Recipe('Grillad kyckling', 3, 40, 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?h=350&auto=compress&cs=tinysrgb'),
    new Recipe('Pizza', 3, 10, 'https://images.pexels.com/photos/65132/pexels-photo-65132.jpeg?h=350&auto=compress&cs=tinysrgb'),
  ]
  @action getRecipeBySlug(slug) {
    return this.recipes.find(r => r.slug === slug)
  }
}

export default new RecipesStore()
