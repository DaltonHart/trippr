import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import EditProfile from './editProfile'

class Profile extends Component {
   constructor() {
      super();
      this.state = {isEditing: false};
      this.toggleEdit = this.toggleEdit.bind(this);
   }

   toggleEdit() {
      console.log('i was clicked!!!!!!!!FAAAACK')
      this.setState({isEditing: !this.state.isEditing})
   }
  componentWillMount() {
    this.props.fetchMessage()
  }

  render() {

     if (this.state.isEditing) {
        return (
          <div>
            <p><strong>Welcome to your profile!</strong></p>
            <br/>
            <p>Here is your profile info:</p>
            <p>{this.props.message}</p>
            <br/>
            <RaisedButton type="" onClick={this.toggleEdit} label="Edit" primary={true} labelColor={'#FFFFFF'}/>
            <EditProfile />

            <p>Here are some routes back to the homepage:</p>
            <p>
              <Link to={'/signin'}>/signin</Link> | <Link to={'/signup'}>/signup</Link>
            </p>

          </div>

        )
     }
    return (
      <div>
        <p><strong>Welcome to your profile!</strong></p>
        <br/>
        <p>Here is your profile info:</p>
        <p>{this.props.message}</p>
        <br/>
        <RaisedButton type="" onClick={this.toggleEdit} label="Edit" primary={true} labelColor={'#FFFFFF'}/>
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
