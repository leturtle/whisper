export const LOGIN = 'LOGIN'

export function login(username, password) {
  return {
    type: LOGIN,
    payload: {
      username: username,
      password: password
    }
  }
}
