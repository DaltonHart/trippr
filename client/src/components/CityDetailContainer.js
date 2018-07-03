import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import CityDetail from './CityDetail'


class CityDetailContainer extends Component {
  render() {
    return(
      <div className="cityDetail">
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
