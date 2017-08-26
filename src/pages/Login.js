import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link, Redirect } from 'react-router-dom'
import queryString from 'query-string'
import Form from '../components/common/Form'
import A from '../components/common/Link'
import TextField from '../components/common/TextField'
import Button from '../components/common/Button'

const StyledLink = A.withComponent(Link)

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
        <Button>Logga in</Button>
        <StyledLink to="/register">Inget konto? Registrera</StyledLink>
        { this.state.error &&
          <p>Felaktigt användarnamn eller lösenord</p>
        }
      </Form>
    )
  }
}

export default Login
