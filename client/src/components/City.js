import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/style.css'

class City extends Component {

constructor(){
   super();
   this.selectCity = this.selectCity.bind(this);
}

selectCity(){
   this.props.onSelectCity(this.props.city)
   console.log("YOOOO", this.props.city)
}
  render() {
    var divStyle = {
      backgroundImage: `url(${this.props.city.photo})`

    };

    return (
      <div className="card" data-city-id={this.props.city._id} onClick={this.selectCity} >
        <div className="flip">
          <div className="front" style={divStyle} >
           <h1 className="text-shadow">{this.props.city.name}</h1>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps,)(City)
