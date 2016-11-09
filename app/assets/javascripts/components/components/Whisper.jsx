import React, {Component, PropTypes} from 'react'
import Auth from './Auth'

class Whisper extends Component {
  render() {
    const {auth, actions} = this.props
    var childComponent = auth.token ?
      <Chat /> :
      <Auth {...auth} actions={actions}/>
    return childComponent
  }
}

Whisper.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Whisper
