import React, {Component, PropTypes} from 'react'

class Auth extends Component {
  render() {
    const {auth, login} = this.props
    var name = auth.isLogin ?
      <div>login</div>:<div>not login</div>
    return(
      name
    )
  }
}

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
}

export default Auth
