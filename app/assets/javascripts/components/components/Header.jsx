import {Component, PropTypes} from 'react'
import {CHAT_SESSION_LIST_PAGE} from '../reducers/chat'

class Header extends Component {
  render() {
    const {username, token, page, logout, listUsersRequest, listSessionsRequest} = this.props
    let listButton = page == CHAT_SESSION_LIST_PAGE ?
      <button onClick={()=>{listUsersRequest(token)}}>users</button>:
      <button onClick={()=>{listSessionsRequest(token)}}>sessions</button>
    return (
      <header>
        <div>{username}</div>
        <button onClick={logout}>logout</button>
        {listButton}
      </header>
    )
  }
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  listUsersRequest: PropTypes.func.isRequired,
  listSessionsRequest: PropTypes.func.isRequired
}

export default Header
