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
        <p><strong>Welcome to your profile!</strong></p>
        <br/>
        <p>Here is your profile info:</p>
        ____________________________________________________________
        <p>{this.props.message}</p>
        ____________________________________________________________
        <br/>
        <p>Here are some routes back to the homepage:</p>
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
