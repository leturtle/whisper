import {Component, PropTypes} from 'react'

class Message extends Component {
  render() {
    return (
      <li>{this.props.content}</li>
    )
  }
}

Message.propTypes = {
  isSentFromMe: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Message
