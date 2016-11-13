import {Component, PropTypes} from 'react'

class Message extends Component {
  render() {
    const onDeleteButtonClick = (e) => {
      e.stopPropagation()
      this.props.deleteMessageRequest(this.props.token, this.props.id)
    }
    const item = this.props.isSentFromMe ?
      <li className="list-group-item list-group-item-action text-xs-right">
        {this.props.content}
        <button className="close" onClick={onDeleteButtonClick}>&times;</button>
      </li> :
      <li className="list-group-item list-group-item-action">
        {this.props.username}:
        {this.props.content}
      </li>
    return item
  }
}

Message.propTypes = {
  token: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isSentFromMe: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  deleteMessageRequest: PropTypes.func.isRequired,
}

export default Message
