import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Whisper from '../components/Whisper'
import * as AuthActions from '../actions/auth'
import * as ChatActions from '../actions/chat'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  var actions = bindActionCreators(
    Object.assign({}, AuthActions, ChatActions),
    dispatch
  )
  actions.logout = () => {
    dispatch(AuthActions.logout())
    dispatch(ChatActions.initState())
  }
  actions.loginRequest = (username, password) => {
    dispatch(dispatch => {
      let loginRequest = AuthActions.loginRequest(username, password)
      loginRequest(dispatch).then((token)=> {
        if (token) {
          dispatch(ChatActions.listSessionsRequest(token))
        }
      })
    })
  }

  return {actions: actions}
}

export default connect(mapStateToProps, mapDispatchToProps)(Whisper)
