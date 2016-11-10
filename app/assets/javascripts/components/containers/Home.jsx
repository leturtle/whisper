import {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
import WhisperApp from './WhisperApp'
import {chatRequest} from '../actions/auth'

const store = configureStore()
export default class Home extends Component {
  componentWillMount() {
    const TOKEN_KEY = 'token'
    let token = localStorage.getItem(TOKEN_KEY) || ''
    store.dispatch(chatRequest(token))
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
