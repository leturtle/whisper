import {TOGGLE_REGISTER, LOGIN, LOGOUT} from '../actions/auth'

const initialState = {
  isRegisterPage: false,
  username: '',
  token: ''
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_REGISTER:
      return Object.assign({}, state, {isRegisterPage: !state.isRegisterPage})
    case LOGIN:
      return Object.assign({}, state, {
        username: action.payload.username,
        token: action.payload.token
      })
    case LOGOUT:
      return Object.assign({}, state, {token: ''})
    default:
      return state
  }
}
