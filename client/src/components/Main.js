import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/style.css'
import CityList from './CityList'
import CityDetailContainer from './CityDetailContainer'

class Main extends Component {


  render() {
    return (
      <div>
        <CityList/>
        <CityDetailContainer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Main)
