import {Component, PropTypes} from 'react'
import {USER_LIST_PAGE, CHAT_SESSION_PAGE} from '../reducers/chat'
import ChatSessionList from './ChatSessionList'
import ChatSession from './ChatSession'
import UserList from './UserList'
import Header from './Header'

class Chat extends Component {
  render() {
    const {
      username, token, page, sessionsById, sessions, sessionsByUserId,
      users, currentSession
    } = this.props
    const {
      logout, listUsersRequest, showSessionRequest, showSessionByUserRequest,
      sendMessageRequest, listSessionsRequest, hideSessionRequest
    } = this.props.actions
    let childComponent = () => {
      switch (page) {
        case CHAT_SESSION_PAGE:
          return <ChatSession
            userId={currentSession.userId}
            username={currentSession.username}
            messages={currentSession.messages}
            token={token}
            sendMessageRequest={sendMessageRequest}/>
        case USER_LIST_PAGE:
          return <UserList
            token={token}
            users={users}
            sessionsByUserId={sessionsByUserId}
            showSessionRequest={showSessionRequest}
            showSessionByUserRequest={showSessionByUserRequest}/>
        default:
          return <ChatSessionList
            token={token}
            sessionsById={sessionsById}
            sessions={sessions}
            showSessionRequest={showSessionRequest}
            hideSessionRequest={hideSessionRequest}/>
      }
    }
    return (
      <div>
        <Header username={username} token={token} logout={logout} page={page}
                listUsersRequest={listUsersRequest}
                listSessionsRequest={listSessionsRequest}/>
        {childComponent()}
      </div>
    )
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
  sessionsById: PropTypes.instanceOf(Map).isRequired,
  sessions: PropTypes.array.isRequired,
  sessionsByUserId: PropTypes.instanceOf(Map).isRequired,
  currentSession: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
}

export default Chat
