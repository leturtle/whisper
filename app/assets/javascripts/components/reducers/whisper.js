import {combineReducers} from 'redux'
import auth from './auth'
import chat from './chat'

const whisper = combineReducers({
  auth,
  chat
})

export default whisper

