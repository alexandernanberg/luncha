import { computed, observable, action } from 'mobx'
import axios from 'axios'
import store from 'store'
import { API } from '../constants'

class User {
  @observable user = {}

  constructor() {
    const user = store.get('user')

    if (user) {
      this.user = user
      this.setAxiosAuthHeader()
      this.fetchUser(user.token)
    }
  }

  setAxiosAuthHeader(token = this.user.token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  @computed get isAuthenticated() {
    return !!this.user.token
  }

  @action fetchUser(token) {
    axios.post(`${API}/profile`)
      .then(({ data }) => {
        this.user = {
          token,
          ...data,
        }

        store.set('user', this.user)
      })
      .catch((err) => {
        console.error(err.response.data)
        this.logout()
      })
  }

  @action login(credentials) {
    return new Promise((resolve) => {
      axios.post(`${API}/login`, credentials)
        .then(({ data }) => {
          this.setAxiosAuthHeader(data.token)
          this.fetchUser(data.token)
          resolve(data)
        })
        .catch(() => { resolve({ sucess: false }) })
    })
  }

  @action logout() {
    this.user = {}
    store.remove('user')
    axios.defaults.headers.common.Authorization = null
  }

  @action register(credentials) {
    return new Promise((resolve) => {
      axios.post(`${API}/register`, credentials)
        .then(({ data }) => {
          if (data.success) {
            this.fetchUser(data.token)
          }
          resolve(data)
        })
        .catch((err) => { resolve(err) })
    })
  }
}

export default new User()
