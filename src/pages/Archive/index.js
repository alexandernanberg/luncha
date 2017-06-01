import React from 'react'
import { observer } from 'mobx-react'
import Recipes from '../../components/Recipes'
import store from '../../stores/RecipeStore'

const Archive = () => (
  <main>
    <Recipes store={store} />
  </main>
)

export default observer(Archive)
