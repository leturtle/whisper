export const TOGGLE_REGISTER = 'TOGGLE_REGISTER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function toggleRegister() {
  return {
    type: TOGGLE_REGISTER
  }
}

export function login(username, token) {
  return {
    type: LOGIN,
    payload: {
      username: username,
      token: token
    }
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

export function loginRequest(username, password) {
  return (dispatch) => {
    var form = new FormData
    form.append('username', username)
    form.append('password', password)
    return fetch('/api/auth/login', {
      method: 'POST',
      body: form
    }).then(response => response.json()).then(json => {
      dispatch(login(json.username, json.token))
    })
  }
}

export function registerRequest(username, password, passwordConfirmation) {
  return (dispatch) => {
    var form = new FormData
    form.append('username', username)
    form.append('password', password)
    form.append('password_confirmation', passwordConfirmation)
    return fetch('/api/auth/register', {
      method: 'POST',
      body: form
    }).then(response => response.json()).then(json => {
      dispatch(login(json.username, json.token))
    })
  }
}

export function chatRequest(token) {
  return (dispatch) => {
    return fetch('/api/chat?token=' + token)
      .then(response => response.json())
      .then(json => {
        dispatch(login(json.username, json.token))
      })
  }
}
