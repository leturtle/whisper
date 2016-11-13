import {Component, PropTypes} from 'react'

class Message extends Component {
  render() {
    const onDeleteButtonClick = (e) => {
      e.stopPropagation()
      this.props.deleteMessageRequest(this.props.token, this.props.id)
    }
    const deleteButton = this.props.isSentFromMe ?
      <button onClick={onDeleteButtonClick}>delete</button> : ''
    return (
      <li>{this.props.content}{deleteButton}</li>
    )
  }
}

Message.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isSentFromMe: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  deleteMessageRequest: PropTypes.func.isRequired
}

export default Message
