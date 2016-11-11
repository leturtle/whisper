import {Component, PropTypes} from 'react'

class ChatForm extends Component {
  render() {
    return (
      <div>
        <input type="text" name="content" ref="contentInput"/>
        <button>send</button>
      </div>
    )
  }
}

ChatForm.propTypes = {
  userId: PropTypes.map.isRequired,
}

export default ChatForm
