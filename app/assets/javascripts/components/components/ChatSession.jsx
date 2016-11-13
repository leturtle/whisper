import {Component, PropTypes} from 'react'
import Message from './Message'
import ChatForm from './ChatForm'

class ChatSession extends Component {
  render() {
    const {token, userId, messages, sendMessageRequest, deleteMessageRequest} = this.props
    var items = []
    messages.forEach((m) => {
      items.push(<Message key={m.id} {...m} token={token} deleteMessageRequest={deleteMessageRequest}/>)
    })
    return (
      <div>
        <ul>{items}</ul>
        <ChatForm token={token} userId={userId}
                  sendMessageRequest={sendMessageRequest}/>
      </div>
    )
  }
}

ChatSession.propTypes = {
  token: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  sendMessageRequest: PropTypes.func.isRequired,
  deleteMessageRequest: PropTypes.func.isRequired
}

export default ChatSession
