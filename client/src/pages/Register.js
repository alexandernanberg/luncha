import React from 'react'
import { Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Form from '../components/common/Form'
import TextField from '../components/common/TextField'
import Link from '../components/common/Link'
import Button from '../components/common/Button'
import Page from '../components/Page'

@inject('userStore')
@observer
class Register extends React.Component {
  constructor() {
    super()

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  state = {
    loading: false,
    error: false,
    email: '',
    password: '',
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.setState({ loading: true })

    this.props.userStore.register(this.state)
      .then((data) => {
        if (data && !data.success) {
          this.setState({ loading: false, error: true })
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
      <Page title="Registrera">
        <Form onSubmit={this.handleOnSubmit}>
          <TextField
            id="formName"
            type="text"
            name="name"
            label="Namn"
            value={this.state.name}
            error={this.state.error}
            onChange={this.handleOnChange}
          />
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
            onChange={this.handleOnChange}
          />
          <Button loading={this.state.loading}>Registrera</Button>
          <Link to="/login">Logga in</Link>
        </Form>
      </Page>
    )
  }
}

export default Register
