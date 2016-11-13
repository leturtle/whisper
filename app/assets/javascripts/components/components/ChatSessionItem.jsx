import {Component, PropTypes} from 'react'

class ChatSessionItem extends Component {
  render() {
    const {token, id, username, showSessionRequest, hideSessionRequest, newMessagesCount} = this.props
    const onHideButtonClick = (e) => {
      e.stopPropagation()
      hideSessionRequest(token, id)
    }
    const newMessageCountTag = newMessagesCount > 0 ?
      <span className="tag tag-pill tag-success float-xs-right" style={{marginRight: '20px'}}>
        {newMessagesCount}
      </span> : ''
    const hideButton = <button className="close"
                               onClick={onHideButtonClick}>&times;</button>
    return (
      <li className="list-group-item list-group-item-action"
          onClick={() => showSessionRequest(token, id)}>
        {username}
        {hideButton}
        {newMessageCountTag}
      </li>
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
