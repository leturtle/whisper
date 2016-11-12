import {Component, PropTypes} from 'react'

class ChatSessionItem extends Component {
  render() {
    const {token, id, username, showSessionRequest} = this.props
    return (
      <li onClick={() => {showSessionRequest(token, id)}}>{username}</li>
    )
  }
}

ChatSessionItem.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  newMessagesCount: PropTypes.number.isRequired,
  messages: PropTypes.array.isRequired,
  showSessionRequest: PropTypes.func.isRequired
}

export default ChatSessionItem
