export const TOGGLE_REGISTER = 'TOGGLE_REGISTER'
export const LOGIN = 'LOGIN'

export function toggleRegister() {
  return {
    type: TOGGLE_REGISTER
  }
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: {
      username: username,
      password: password
    }
  }
}
