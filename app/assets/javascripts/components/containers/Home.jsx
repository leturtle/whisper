import {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
import WhisperApp from './WhisperApp'
import {login, authRequest} from '../actions/auth'
import {setSessions, listSessionsRequest} from '../actions/chat'

const store = configureStore()
export default class Home extends Component {
  componentWillMount() {
    const TOKEN_KEY = 'token'
    let token = localStorage.getItem(TOKEN_KEY) || ''
    store.dispatch(login('', token))
    store.dispatch(setSessions([]))
    if (token) {
      store.dispatch(authRequest(token))
      store.dispatch(listSessionsRequest(token))
    }
    store.subscribe(()=> {
      localStorage.setItem(TOKEN_KEY, store.getState().auth.token)
    })
  }

  render() {
    return (
      <Provider store={store}>
        <WhisperApp/>
      </Provider>
    )
  }
}
