import {createStore} from 'redux'
import whisper from '../reducers/whisper'

export default function configureStore() {
  return createStore(
    whisper
  )
}
