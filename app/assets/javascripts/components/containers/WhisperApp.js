import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Whisper from '../components/Whisper'
import * as Actions from '../actions/auth'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Whisper)
