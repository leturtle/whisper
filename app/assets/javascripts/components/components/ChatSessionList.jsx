import {Component, PropTypes} from 'react'
import ChatSessionItem from './ChatSessionItem'

class ChatSessionList extends Component {
  render() {
    const {token, sessionsById, sessions, showSessionRequest} = this.props
    var items = []
    sessions.forEach((id) => {
      var session = sessionsById.get(id)
      items.push(<ChatSessionItem
        key={id}
        token={token}
        showSessionRequest={showSessionRequest}
        {...session}/>)
    })
    return (
      <ul>{items}</ul>
    )
  }
}

ChatSessionList.propTypes = {
  token: PropTypes.string.isRequired,
  sessionsById: PropTypes.instanceOf(Map).isRequired,
  sessions: PropTypes.array.isRequired,
  showSessionRequest: PropTypes.func.isRequired
}

export default ChatSessionList
