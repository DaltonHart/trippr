import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/style.css'
import CityList from './CityList'
import CityModel from '../models/city'
import CityDetailContainer from './CityDetailContainer'

class Main extends Component {
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
      <div className="main">
        <CityList/>
        <CityDetailContainer cities = {this.state.cities} />
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
