import {Component, PropTypes} from 'react'
class Register extends Component {
  render() {
    const {toggleRegister, registerRequest} = this.props.actions
    return (
      <div className="row" style={{marginTop: '50px'}}>
        <div className="offset-xs-3 col-xs-6">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link" onClick={toggleRegister} href="javascript:;">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="javascript:;">Register</a>
            </li>
          </ul>
          <div className="form-group" style={{marginTop: '20px'}}>
            <input className="form-control" type="text" name="username" ref="usernameInput" placeholder="Enter a username..."/>
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" ref="passwordInput" placeholder="Enter a password..."/>
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password_confirmation" ref="passwordConfirmationInput" placeholder="Confirm the password..."/>
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-primary" onClick={()=> {
              registerRequest(
                this.refs.usernameInput.value,
                this.refs.passwordInput.value,
                this.refs.passwordConfirmationInput.value
              )
            }}>register
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  actions: PropTypes.object.isRequired
}

export default Register
