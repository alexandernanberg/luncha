import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import style from './style.scss'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className={style.component}>
        <form action="" className={style.form} onSubmit={this.handleOnSubmit}>
          <label htmlFor="loginFormEmail" className={style.label}>Epost</label>
          <Input id="loginFormEmail" type="email" name="email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
          <label htmlFor="loginFormPassword" className={style.label}>Lösenord</label>
          <Input id="loginFormPassword" type="password" name="password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
          <Button className={style.button}>Logga in</Button>
          <Link to="/register" className={style.link}>Inget konto? Registrera</Link>
        </form>
      </div>
    )
  }
}

export default observer(Login)
