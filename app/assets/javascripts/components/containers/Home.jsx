import {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
import WhisperApp from './WhisperApp'

const store = configureStore()
export default class Home extends Component {
  render(){
    return (
      <Provider store={store}>
        <WhisperApp/>
      </Provider>
    )
  }
}
