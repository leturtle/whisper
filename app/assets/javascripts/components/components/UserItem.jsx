import {Component, PropTypes} from 'react'

class UserItem extends Component {
  render() {
    return (
      <li>{this.props.username}</li>
    )
  }
}

UserItem.propTypes = {
  userId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired
}

export default UserItem
