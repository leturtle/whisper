import {Component, PropTypes} from 'react'

class ChatForm extends Component {
  render() {
    const {token, userId, sendMessageRequest} = this.props
    const onClick = () => {
      const content = this.refs.contentInput.value
      if (content) {
        sendMessageRequest(token, userId, content)
        this.refs.contentInput.value = ''
      }
    }
    const onKeyUp = (e) => {
      if (e.key == 'Enter') {
        onClick()
      }
    }
    return (
      <div className="input-group input-group-lg btn-block">
        <input className="form-control" type="text" name="content"
               ref="contentInput" onKeyUp={onKeyUp}/>
        <span className="input-group-btn">
            <button className="btn btn-outline-success"
                    onClick={onClick}
            >Send</button>
        </span>
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
