import {Component, PropTypes} from 'react'

class Chat extends Component {
  render() {
    const {username} = this.props
    const {logout} = this.props.actions
    return (
      <div>
        <div>{username}</div>
        <button onClick={logout}>logout</button>
      </div>
    )
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default Chat
