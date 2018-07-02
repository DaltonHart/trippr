import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import '../style/style.css'
import Cities from './Cities'
import CityModel from '../models/city'

class CityList extends Component {

  constructor(){
    super()
    this.state = {
      cities: [],
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    CityModel.all().then( (res) => {
      console.log('Here is the res:',res)
      this.setState ({
        cities: res.data,
        city: ''
      })
    })
  }

  render() {

    return (
    <div>
      <div className="Cities">
        <Cities towns={this.state.cities}/>
        </div>
    </div>
    )
  }
}


export default CityList
