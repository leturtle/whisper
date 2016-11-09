import React, {Component, PropTypes} from 'react'
class Register extends Component {
  render() {
    const {toggleRegister} = this.props.actions
    return(
      <div>
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <input type="button" value="register"/>
        <button onClick={toggleRegister}>back</button>
      </div>
    )
  }
}

Register.propTypes = {
  actions: PropTypes.object.isRequired
}

export default Register
