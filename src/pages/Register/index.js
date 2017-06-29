import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import TextField from '../../components/common/TextField'
import Button from '../../components/common/Button'
import style from './style.scss'

@inject('userStore')
@observer
class Register extends React.Component {
  constructor() {
    super()

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  state = {
    email: '',
    password: '',
  }

  handleOnSubmit = (e) => {
    e.preventDefault()

    this.props.userStore.register(this.state)
  }

  handleOnChange({ target }) {
    this.setState({ [target.name]: target.value })
  }

  render() {
    if (this.props.userStore.isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <div className={style.component}>
        <form className={style.form} onSubmit={this.handleOnSubmit}>
          <TextField
            type="text"
            name="name"
            label="Namn"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <TextField
            type="email"
            name="email"
            label="Epost"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
          <TextField
            id="formPassword"
            type="password"
            name="password"
            label="Lösenord"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <Button className={style.button}>Registrera</Button>
          <Link to="/login" className={style.link}>Logga in</Link>
        </form>
      </div>
    )
  }
}

export default Register
