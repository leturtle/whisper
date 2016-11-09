import {Component, PropTypes} from 'react'
class Register extends Component {
  render() {
    const {toggleRegister, registerRequest} = this.props.actions
    return (
      <div>
        <input type="text" name="username" ref="usernameInput"/>
        <input type="password" name="password" ref="passwordInput"/>
        <input type="password" name="password_confirmation"
               ref="passwordConfirmationInput"/>
        <button onClick={()=> {
          registerRequest(
            this.refs.usernameInput.value,
            this.refs.passwordInput.value,
            this.refs.passwordConfirmationInput.value
          )
        }}>register
        </button>
        <button onClick={toggleRegister}>back</button>
      </div>
    )
  }
}

Register.propTypes = {
  actions: PropTypes.object.isRequired
}

export default Register
