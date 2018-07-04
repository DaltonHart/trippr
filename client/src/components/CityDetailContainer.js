import React, { Component } from 'react'
import { connect } from 'react-redux'
import CityDetail from './CityDetail'


class CityDetailContainer extends Component {
  render() {
    return(
      <div className="cityDetail">
<<<<<<< HEAD
        <CityDetail cities={this.props.cities}/>
=======
        <CityDetail cities={this.props.cities}
        selectedCity={this.props.selectedCity}/>
>>>>>>> 215d73610b2418888f1538bdd00c3fb6a0988b53
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
