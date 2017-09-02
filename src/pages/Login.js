import React from 'react'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import Form from '../components/common/Form'
import Link from '../components/common/Link'
import TextField from '../components/common/TextField'
import Button from '../components/common/Button'

@inject('userStore')
@observer
class Login extends React.Component {
  state = {
    status: '',
    error: false,
    email: '',
    password: '',
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.setState({ loading: true })

    this.props.userStore.login(this.state)
      .then((data) => {
        if (data && !data.success) {
          this.setState({ loading: false, error: true })
        }
      })
  }

  handleOnChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    if (this.props.userStore.isAuthenticated) {
      const { redirect = '/' } = queryString.parse(location.search)
      return <Redirect to={redirect} />
    }

    return (
      <Form onSubmit={this.handleOnSubmit}>
        <TextField
          id="formEmail"
          type="email"
          name="email"
          label="Epost"
          value={this.state.email}
          error={this.state.error}
          onChange={this.handleOnChange}
        />
        <TextField
          id="formPassword"
          type="password"
          name="password"
          label="Lösenord"
          value={this.state.password}
          error={this.state.error}
          errorMessage={'Felaktigt användarnamn eller lösenord'}
          onChange={this.handleOnChange}
        />
        <Button loading={this.state.loading}>Logga in</Button>
        <Link to="/register">Inget konto? Registrera</Link>
      </Form>
    )
  }
}

export default Login
