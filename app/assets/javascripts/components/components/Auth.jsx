import {Component, PropTypes} from 'react'
import Login from './Login'
import Register from './Register'

class Auth extends Component {
  render() {
    const {isRegisterPage, actions} = this.props
    var childComponent = isRegisterPage ?
      <Register actions={actions}/> :
      <Login actions={actions}/>
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="">Whisper</a>
        </nav>
        {childComponent}
      </div>
    )
  }
}

Auth.propTypes = {
  isRegisterPage: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default Auth
