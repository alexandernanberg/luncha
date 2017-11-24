import React from 'react'
import { observer } from 'mobx-react'
import Page from '../components/Page'
import Recipes from '../components/RecipeList'
import store from '../stores/RecipeStore'

const Archive = observer(() => (
  <Page title="Recept">
    <Recipes store={store} />
  </Page>
))

export default Archive
