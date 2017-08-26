import React from 'react'
import { observer } from 'mobx-react'
import Recipes from '../components/RecipeList'
import store from '../stores/RecipeStore'

const Archive = observer(() => (
  <Recipes store={store} />
))

export default Archive
