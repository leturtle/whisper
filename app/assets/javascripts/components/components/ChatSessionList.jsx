import {Component, PropTypes} from 'react'
import ChatSessionItem from './ChatSessionItem'

class ChatSessionList extends Component {
  render() {
    const {sessionsById, sessions} = this.props
    var items = []
    sessions.forEach((s) => {
      var session = sessionsById.get(s.id)
      items.push(<ChatSessionItem {...session}/>)
    })
    return (
      <ul>{items}</ul>
    )
  }
}

ChatSessionList.propTypes = {
  sessionsById: PropTypes.instanceOf(Map).isRequired,
  sessions: PropTypes.array.isRequired
}

export default ChatSessionList
