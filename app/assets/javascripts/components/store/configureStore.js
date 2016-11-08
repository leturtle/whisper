import {createStore} from 'redux'
import auth from '../reducers/auth'

export default function configureStore() {
  return createStore(
    auth
  )
}
