import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../style/style.css'
import CityList from './CityList'
import CityModel from '../models/city'
import CityDetailContainer from './CityDetailContainer'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      cities: [],
      selectedCity: [],
    }
    this.onSelectCity = this.onSelectCity.bind(this)
  }

  onSelectCity(city){
     console.log("I CLICKED A CITY")
     this.setState({
        selectedCity: city
     })
     console.log("HELLO CITY: ", this.state.selectedCity)
 }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    CityModel.all().then( (res) => {
      console.log('Here is the res:',res)
      this.setState ({
        cities: res.data
      })
    })
  }

  render() {
     console.log("Here are the cities: ", this.state.cities)
    return (
      <div className="main">
        <CityList
        cities = {this.state.cities}
        onSelectCity = {this.onSelectCity}
        selectedCity = {this.state.selectedCity}/>
        <CityDetailContainer
        cities = {this.state.cities}
        selectedCity = {this.state.selectedCity}/>
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
