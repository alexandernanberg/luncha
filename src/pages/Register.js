import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Form from '../components/common/Form'
import TextField from '../components/common/TextField'
import A from '../components/common/Link'
import Button from '../components/common/Button'

const StyledLink = A.withComponent(Link)

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
      <Form onSubmit={this.handleOnSubmit}>
        <TextField
          id="formName"
          type="text"
          name="name"
          label="Namn"
          value={this.state.name}
          onChange={this.handleOnChange}
        />
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
        <Button>Registrera</Button>
        <StyledLink to="/login">Logga in</StyledLink>
      </Form>
    )
  }
}

export default Register
