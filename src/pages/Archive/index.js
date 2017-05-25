import React from 'react'
import { observer } from 'mobx-react'
import Recipes from '../../components/Recipes'
import store from '../../stores/RecipeStore'

const Archive = () => (
  <div>
    <Recipes store={store} />
  </div>
)

export default observer(Archive)
