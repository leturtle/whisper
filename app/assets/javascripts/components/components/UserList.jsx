import {Component, PropTypes} from 'react'
import UserItem from './UserItem'

class UserList extends Component {
  render() {
    const {users} = this.props
    var items = []
    users.forEach((u) => {
      items.push(<UserItem userId={u.userId} username={u.username}/>)
    })
    return (
      <ul>{items}</ul>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  sessionsByUserId: PropTypes.instanceOf(Map).isRequired
}

export default UserList
