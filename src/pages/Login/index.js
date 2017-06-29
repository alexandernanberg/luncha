import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import TextField from '../../components/common/TextField'
import Button from '../../components/common/Button'
import style from './style.scss'

@inject('userStore')
@observer
class Login extends React.Component {
  constructor() {
    super()

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  state = {
    error: false,
    email: '',
    password: '',
  }

  handleOnSubmit = (e) => {
    e.preventDefault()

    this.props.userStore.login(this.state)
      .then((data) => {
        if (data && !data.success) {
          this.setState({ error: true })
        }
      })
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
          <Button className={style.button}>Logga in</Button>
          <Link to="/register" className={style.link}>Inget konto? Registrera</Link>
          { this.state.error &&
            <p className={style.errorMessage}>Felaktigt användarnamn eller lösenord</p>
          }
        </form>
      </div>
    )
  }
}

export default Login
