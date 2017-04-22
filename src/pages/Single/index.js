import React from 'react'
import Hero from '../../components/Hero'
import store from '../../stores/RecipesStore'

class Single extends React.Component {
  componentWillMount() {
    const slug = this.props.match.params.slug
    this.item = store.getRecipeBySlug(slug)
  }

  item = null

  render() {
    return (
      <div>
        <Hero>
          <h1>{this.item.name}</h1>
          <img src={this.item.image} alt="" style={{ maxWidth: '720px' }} />
        </Hero>
      </div>
    )
  }
}

export default Single
