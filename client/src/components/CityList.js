import React, { Component } from 'react'
import '../style/style.css'
import Cities from './Cities'
import CityModel from '../models/city'

class CityList extends Component {

  render() {

    return (
    <div className="cityContainer">
      <div className="cities">
        <Cities towns={this.props.cities}
        selectedCity={this.props.selectedCity}
        onSelectCity = {this.props.onSelectCity}/>
        </div>
    </div>
    )
  }
}


export default CityList
