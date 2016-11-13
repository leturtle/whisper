import {Component, PropTypes} from 'react'
class Login extends Component {
  render() {
    const {toggleRegister, loginRequest} = this.props.actions
    return (
      <div className="row" style={{marginTop: '50px'}}>
        <div className="offset-xs-3 col-xs-6">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="javascript:;">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={toggleRegister} href="javascript:;">Register</a>
            </li>
          </ul>
          <div className="form-group" style={{marginTop: '20px'}}>
            <input className="form-control" type="text" name="username" ref="usernameInput" placeholder="Enter your username..."/>
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" ref="passwordInput" placeholder="Enter your password..."/>
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-success" onClick={()=> {
              loginRequest(
                this.refs.usernameInput.value,
                this.refs.passwordInput.value)
            }}>Login</button>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired
}

export default Login
