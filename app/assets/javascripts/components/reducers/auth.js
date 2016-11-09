import {TOGGLE_REGISTER, LOGIN} from '../actions/auth'

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
      return Object.assign({}, state, {token: 'abc'})
    default:
      return state
  }
}
