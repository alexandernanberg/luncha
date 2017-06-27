import React from 'react'
import anime from 'animejs'

class Animetion extends React.Component {
  constructor() {
    super()
    this.target = null
  }

  componentDidMount() {
    if (this.props.animateOnInitialRender) {
      this.doAnime(this.props)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.doAnime(nextProps)
  }

  doAnime(props) {
    if (this.anime) {
      this.anime.pause()
    }

    this.anime = anime({
      ...props.animeProps,
      targets: this.target,
    })

    this.anime.finished.then(this.props.onAnimationFinished)
  }

  render() {
    return (
      <div
        className={this.props.className}
        ref={(ref) => {
          this.target = ref
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

Animetion.defaultProps = {
  onAnimationFinished: () => { },
  animateOnInitialRender: true,
}

export default Animetion
