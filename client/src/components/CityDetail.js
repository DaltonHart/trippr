import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import Modal from 'react-responsive-modal'
import PostForm from './auth/post_form'


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
      <div>
        <p>I am the city detail page!</p>
        <RaisedButton type="" onClick={this.onOpenModal} label="Add Post" primary={true} labelColor={'#FFFFFF'}/>
          <Modal open={open} onClose={this.onCloseModal}>
            <PostForm/>
          </Modal>
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
