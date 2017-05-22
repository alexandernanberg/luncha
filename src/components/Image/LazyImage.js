import React from 'react'

const states = {
  PENDING: 'pending',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
}

class LazyImage extends React.Component {
  state = {
    status: this.props.src ? states.LOADING : states.PENDING,
  }

  componentDidMount() {
    if (this.state.status === states.LOADING) {
      this.createLoader()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.setState({
        status: nextProps.src ? states.LOADING : states.PENDING,
      })
    }
  }

  componentDidUpdate() {
    if (this.state.status === states.LOADING && !this.img) {
      this.createLoader()
    }
  }

  handleLoad = () => {
    this.destroyLoader()
    this.setState({ status: states.LOADED })
  }

  handleError = () => {
    this.destroyLoader()
    this.setState({ status: states.FAILED })
  }

  createLoader() {
    this.destroyLoader()

    this.img = new Image()
    this.img.onload = this.handleLoad
    this.img.onerror = this.handleError
    this.img.src = this.props.src

    if (this.img.complete) this.handleLoad()
  }

  destroyLoader() {
    if (this.img) {
      this.img.onload = null
      this.img.onerror = null
      this.img = null
    }
  }

  render() {
    switch (this.state.status) {
      case states.LOADED:
        return <img src={this.props.src} alt={this.props.alt} />
      case states.FAILED:
        return this.props.fallback ? this.props.fallback : <div>Error</div>
      default:
        return this.props.preloader ? this.props.preloader : <div>Loading</div>
    }
  }
}

export default LazyImage
