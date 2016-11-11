import {Component, PropTypes} from 'react'

class ChatSessionItem extends Component {
  render() {
    return (
      <li>{this.props.username}</li>
    )
  }
}

ChatSessionItem.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  newMessagesCount: PropTypes.number.isRequired,
  messages: PropTypes.array.isRequired
}

export default ChatSessionItem
