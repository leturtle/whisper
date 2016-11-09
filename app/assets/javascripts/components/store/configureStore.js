import thunkMiddleWare from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import whisper from '../reducers/whisper'

export default function configureStore() {
  return createStore(
    whisper,
    applyMiddleware(thunkMiddleWare)
  )
}
