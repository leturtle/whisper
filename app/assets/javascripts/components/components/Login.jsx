import {Component, PropTypes} from 'react'
class Login extends Component {
  render() {
    const {toggleRegister, loginRequest} = this.props.actions
    return (
      <div>
        <input type="text" name="username" ref="usernameInput"/>
        <input type="password" name="password" ref="passwordInput"/>
        <button onClick={()=> {
          loginRequest(
            this.refs.usernameInput.value,
            this.refs.passwordInput.value)
        }}>login
        </button>
        <button onClick={toggleRegister}>register</button>
      </div>
    )
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired
}

export default Login
