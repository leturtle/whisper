import {Component, PropTypes} from 'react'
import {CHAT_SESSION_LIST_PAGE, USER_LIST_PAGE} from '../reducers/chat'

class Header extends Component {
  render() {
    const {username, token, page, logout, listUsersRequest, listSessionsRequest} = this.props
    const sessionListButton = <a className="nav-link" onClick={()=> {
      listSessionsRequest(token)
    }} href="javascript:;">Sessions</a>
    const sessionListClass = page == CHAT_SESSION_LIST_PAGE ? 'nav-item active' : 'nav-item'
    const userListButton = <a className="nav-link" onClick={()=> {
      listUsersRequest(token)
    }} href="javascript:;">Users</a>
    const userListClass = page == USER_LIST_PAGE ? 'nav-item active' : 'nav-item'
    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="">Whisper</a>
        <ul className="nav navbar-nav">
          <li className={sessionListClass}>{sessionListButton}</li>
          <li className={userListClass}>{userListButton}</li>
          <li className="nav-item dropdown float-xs-right">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:;">{username}</a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" onClick={logout} href="javascript:;">Logout</a>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  listUsersRequest: PropTypes.func.isRequired,
  listSessionsRequest: PropTypes.func.isRequired
}

export default Header
