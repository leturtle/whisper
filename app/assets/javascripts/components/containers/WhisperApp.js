import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Auth from '../components/Auth'
import * as Actions from '../actions/auth'

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
