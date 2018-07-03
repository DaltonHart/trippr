import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Post from './Post'



class PostList extends Component {
  render() {
    return(
      <div>
        <h4>I am a container for the post list!</h4>
        <Post />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(PostList)
