import React from 'react'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Icon from '../../components/Icon'
import store from '../../stores/RecipesStore'
import style from './style.scss'

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
          <ul className={style.list}>
            <li className={style.listItem}>
              <h4><Icon name="time" /><span><b>30</b> min</span></h4>
            </li>
            <li className={style.listItem}>
              <h4><Icon name="serving" /><span><b>4</b> pers</span></h4>
            </li>
            <li className={style.listItem}>
              <h4><Icon name="star" /><span><b>5</b> av 5</span></h4>
            </li>
          </ul>
        </Hero>
        <Section>
          <img src={this.item.image} alt="" />
        </Section>
      </div>
    )
  }
}

export default Single
