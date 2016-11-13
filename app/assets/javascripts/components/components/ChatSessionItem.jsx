import {Component, PropTypes} from 'react'

class ChatSessionItem extends Component {
  render() {
    const {token, id, username, showSessionRequest, hideSessionRequest} = this.props
    const onHideButtonClick = (e) => {
      e.stopPropagation()
      hideSessionRequest(token, id)
    }
    const hideButton = <button onClick={onHideButtonClick}>hide</button>
    return (
      <li onClick={() => showSessionRequest(token, id)}>{username}{hideButton}</li>
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
  showSessionRequest: PropTypes.func.isRequired,
  hideSessionRequest: PropTypes.func.isRequired
}

export default ChatSessionItem
