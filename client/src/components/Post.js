import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'


class Post extends Component {
  render() {
    return(
      <div>
        <h6>Post Title</h6>
        <p>Title</p>
        <p>Date</p>
        <p>I am a lonely post *sigh* </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Post)
