import React, {Component, PropTypes} from 'react'
import Chat from './Chat'
import Auth from './Auth'

class Whisper extends Component {
  render() {
    const {auth, chat, actions} = this.props
    var childComponent = auth.token ?
      <Chat {...chat} username={auth.username} actions={actions}/> :
      <Auth {...auth} actions={actions}/>
    return childComponent
  }
}

Whisper.propTypes = {
  auth: PropTypes.object.isRequired,
  chat: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Whisper
