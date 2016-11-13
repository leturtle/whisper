import {Component, PropTypes} from 'react'
import UserItem from './UserItem'

class UserList extends Component {
  render() {
    const {token, users, sessionsByUserId, showSessionByUserRequest, showSessionRequest} = this.props
    var items = []
    users.forEach((u) => {
      let onClick = () => {
        let sessionId = sessionsByUserId.get(u.userId)
        if (sessionId) {
          showSessionRequest(token, sessionId)
        } else {
          showSessionByUserRequest(token, u.userId, u.username)
        }
      }
      items.push(<UserItem key={u.userId} userId={u.userId}
                           username={u.username} onClick={onClick}/>)
    })
    return (
      <ul>{items}</ul>
    )
  }
}

UserList.propTypes = {
  token: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  sessionsByUserId: PropTypes.instanceOf(Map).isRequired,
  showSessionByUserRequest: PropTypes.func.isRequired,
  showSessionRequest: PropTypes.func.isRequired
}

export default UserList
