import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import CityDetail from './CityDetail'


class CityDetailContainer extends Component {
  render() {
    return(
      <div>
        <h3>I am a container for the city detail!</h3>
        <CityDetail/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(CityDetailContainer)
