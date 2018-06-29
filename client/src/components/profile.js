import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'

class Profile extends Component {

  componentWillMount() {
    this.props.fetchMessage()
  }

  render() {
    return (
      <div>
        <p><strong>Welcome to the secure page!</strong></p>
        <br/>
        <p>Here is a secret response from the server that your token returned:</p>
        ____________________________________________________________
        <p>{this.props.message}</p>
        ____________________________________________________________
        <br/>
        <p>Notice that clicking these links redirect to the homepage, as you are already signed in:</p>
        <p>
          <Link to={'/signin'}>/signin</Link> | <Link to={'/signup'}>/signup</Link>
        </p>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.auth.message
  }
}

export default connect(mapStateToProps, actions)(Profile)