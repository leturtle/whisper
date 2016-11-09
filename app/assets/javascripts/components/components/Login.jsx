import React, {Component, PropTypes} from 'react'
class Login extends Component {
  render() {
    const {toggleRegister} = this.props.actions
    return(
      <div>
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <input type="button" value="login"/>
        <button onClick={toggleRegister}>register</button>
      </div>
    )
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired
}

export default Login
