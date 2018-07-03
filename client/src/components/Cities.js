import React, { Component } from 'react'
import '../style/style.css'
import City from './City'

class Cities extends Component {


  render() {
    let towns = this.props.towns.map( (city, i) => {
      return (
        <City
          city={city}
          key={i} />
      )
    })
  
    return (
    <div>
      <section className="cityTitle">
      <h1>Cities</h1>
      </section>
      <div className="towns">
      {towns}
      </div>
    </div>
    )
  }
}


export default Cities
