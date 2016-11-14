import {Component, PropTypes} from 'react'

class Message extends Component {
  render() {
    const onDeleteButtonClick = (e) => {
      e.stopPropagation()
      this.props.deleteMessageRequest(this.props.token, this.props.id)
    }
    const item = this.props.isSentFromMe ?
      <li className="list-group-item text-xs-right" style={{border:'none;'}}>
        <h4>
          <span className="tag tag-pill tag-primary">{this.props.content}</span>
          <button className="close" onClick={onDeleteButtonClick}>&times;</button>
        </h4>
      </li> :
      <li className="list-group-item" style={{border: 'none;'}}>
        <h4>
          {this.props.username}:
          <span className="tag tag-pill tag-default" style={{marginLeft:'5px'}}>
            {this.props.content}
          </span>
        </h4>
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
