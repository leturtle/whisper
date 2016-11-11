import {Component, PropTypes} from 'react'
import Message from './Message'
import ChatForm from './ChatForm'

class ChatSession extends Component {
  render() {
    const {userId, messages} = this.props
    var items = []
    messages.forEach((m) => {
      items.push(<Message {...m}/>)
    })
    return (
      <div>
        <ul>{items}</ul>
        <ChatForm userId={userId}/>
      </div>
    )
  }
}

ChatSession.propTypes = {
  userId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired
}

export default ChatSession
