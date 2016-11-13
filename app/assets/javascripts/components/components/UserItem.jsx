import {Component, PropTypes} from 'react'

class UserItem extends Component {
  render() {
    return (
      <li className="list-group-item list-group-item-action" onClick={this.props.onClick}>{this.props.username}</li>
    )
  }
}

UserItem.propTypes = {
  userId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default UserItem
