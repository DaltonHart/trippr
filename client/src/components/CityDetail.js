import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import Modal from 'react-responsive-modal'
import PostForm from './auth/post_form'
import PostList from './PostList'


class CityDetail extends Component{
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } =this.state;
    return(
      <div className="cityDetailConatiner">
        <div className="heroCity">
        <h4>City Name</h4>
        <h6>Country Name</h6>
        </div>
        <div className="postHeader">
          <h4>Posts</h4>
          <RaisedButton type="" onClick={this.onOpenModal} label="+" primary={true} labelColor={'#FFFFFF'} className="addButton"/>
          <Modal open={open} onClose={this.onCloseModal}>
            <PostForm/>
          </Modal>
          </div>
          <PostList className="postList"/>
      </div>
    )
  }
}

  function mapStateToProps(state) {
    return {
      cities: state.auth.cities,
      city: state.auth.city,
      user: state.auth.user
    }
  }

  export default connect(mapStateToProps, actions)(CityDetail)
