import React, { Component } from 'react'
import { connect } from 'react-redux'
import CityDetail from './CityDetail'


class CityDetailContainer extends Component {
  render() {
    return(
      <div className="cityDetail">
        <CityDetail cities={this.props.cities}/>
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
