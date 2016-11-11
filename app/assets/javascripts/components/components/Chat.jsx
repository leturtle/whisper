import {Component, PropTypes} from 'react'
import ChatSessionList from './ChatSessionList'

class Chat extends Component {
  render() {
    const {username, page, sessionsById, sessions} = this.props
    const {logout} = this.props.actions
    let childComponent = () => {
      switch(page) {
        default:
          return <ChatSessionList sessionsById={sessionsById} sessions={sessions}/>
      }
    }
    return (
      <div>
        <header>
          <div>{username}</div>
          <button onClick={logout}>logout</button>
        </header>
        {childComponent}
      </div>
    )
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
  sessionsById: PropTypes.instanceOf(Map).isRequired,
  sessions: PropTypes.array.isRequired,
  sessionsByUserId: PropTypes.instanceOf(Map).isRequired,
  currentSession: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
}

export default Chat
