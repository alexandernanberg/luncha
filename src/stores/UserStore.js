import { computed, observable, action } from 'mobx'
import axios from 'axios'
import { API } from '../constants'

class User {
  @observable user = {}

  constructor() {
    this.user.token = localStorage.getItem('token')

    if (this.user.token) {
      this.setAxiosAuthHeader()
      this.fetchUser()
    }
  }

  setAxiosAuthHeader() {
    axios.defaults.headers.common.Authorization = `JWT ${this.user.token}`
  }

  @computed get isAuthenticated() {
    return !!this.user.token
  }

  @action logout() {
    this.user = {}
    localStorage.clear('token')
    axios.defaults.headers.common.Authorization = ''
  }

  @action fetchUser() {
    axios.post(`${API}/profile`)
      .then(({ data }) => {
        this.user = {
          ...this.user,
          ...data,
        }
      })
      .catch((err) => {
        console.error(err.response.data)
        this.logout()
      })
  }

  @action login(credentials) {
    return axios.post(`${API}/login`, credentials)
      .then(({ data }) => {
        this.user = { token: data.token }
        this.setAxiosAuthHeader()
        this.fetchUser()
        localStorage.setItem('token', data.token)
      })
      .catch(err => err.response.data)
  }

  @action register(credentials) {
    return axios.post(`${API}/register`, credentials)
      .then(({ data }) => {
        this.user = { id: data.id, token: data.token }
      })
      .catch(err => err.response.data)
  }
}

export default new User()
