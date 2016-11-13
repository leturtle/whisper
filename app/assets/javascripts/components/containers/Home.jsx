import {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
import WhisperApp from './WhisperApp'
import {login, authRequest} from '../actions/auth'
import {
  listSessionsRequest,
  initState,
  showSessionRequest,
  establishSocket
} from '../actions/chat'
import {CHAT_SESSION_PAGE, CHAT_SESSION_LIST_PAGE} from '../reducers/chat'

const store = configureStore()
export default class Home extends Component {
  componentWillMount() {
    const TOKEN_KEY = 'token'
    let token = localStorage.getItem(TOKEN_KEY) || ''
    store.dispatch(login('', token))
    store.dispatch(initState())
    if (token) {
      store.dispatch(authRequest(token))
      store.dispatch(listSessionsRequest(token))
    }
    store.subscribe(()=> {
      const state = store.getState()
      const token = state.auth.token
      localStorage.setItem(TOKEN_KEY, token)
      if (!state.chat.socket && token) {
        const subscription = App.cable.subscriptions.create({channel: 'ChatChannel', token: token}, {
          received: (o) => {
            const state = store.getState()
            if (state.chat.page == CHAT_SESSION_PAGE && state.chat.currentSession.id == o.id) {
              store.dispatch(showSessionRequest(token, o.id))
            }
            if (state.chat.page == CHAT_SESSION_LIST_PAGE) {
              store.dispatch(listSessionsRequest(token))
            }
          }
        })
        store.dispatch(establishSocket(subscription))
      }
      if (state.chat.socket && !state.chat.socketEstablished) {
        state.chat.socket.unsubscribe()
      }
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
