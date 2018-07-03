import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Post from './Post'



class PostList extends Component {
  render() {
    return(
      <div className="postList">
        <Post />
        <Post />
        <Post />
        <Post />
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
