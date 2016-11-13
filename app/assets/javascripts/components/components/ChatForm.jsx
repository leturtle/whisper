import {Component, PropTypes} from 'react'

class ChatForm extends Component {
  render() {
    const {token, userId, sendMessageRequest} = this.props
    let onClick = () => {
      sendMessageRequest(token, userId, this.refs.contentInput.value)
      this.refs.contentInput.value = ''
    }
    return (
      <div>
        <input type="text" name="content" ref="contentInput"/>
        <button
          onClick={onClick}>
          send
        </button>
      </div>
    )
  }
}

ChatForm.propTypes = {
  token: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  sendMessageRequest: PropTypes.func.isRequired
}

export default ChatForm
