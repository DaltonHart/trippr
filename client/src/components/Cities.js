import React, { Component } from 'react'
import '../style/style.css'
import City from './City'

class Cities extends Component {


  render() {
    let towns = this.props.towns.map( (city, i) => {
      return (
        <City
          city={city}
          selectedCity={this.props.selectedCity}
          onSelectCity = {this.props.onSelectCity}
          onClick={this.props.onSelectCity}
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
