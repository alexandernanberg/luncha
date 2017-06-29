import { computed, observable, action } from 'mobx'
import axios from 'axios'
import { API } from '../constants'

class User {
  @observable user = {}

  @computed get isAuthenticated() {
    return !!this.user.token
  }

  @action login(credentials) {
    return axios.post(`${API}/login`, credentials)
      .then(({ data }) => {
        this.user = { id: data.id, token: data.token }
      })
      .catch(err => err.response.data)
  }

  @action register(credentials) {
    axios.post(`${API}/register`, credentials)
      .then(({ data }) => {
        this.user = { id: data.id, token: data.token }
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}

export default new User()
