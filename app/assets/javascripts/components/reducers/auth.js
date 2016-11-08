import {LOGIN} from '../actions/auth'

export default function auth(state = {auth: {login: true}}, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {auth: {isLogin: true}})
    default:
      return state
  }
}
