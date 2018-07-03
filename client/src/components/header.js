import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import compass from '../images/compass.svg'
import '../style/style.css'
import ModalLogin from "./modal"

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={1} className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>,
        <li key={2} className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
      ]
    } else {
      return [
        <li key={1} className="nav-item">
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li key={2} className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>,
        <li key={3} className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <header className="row">
        <img src={compass} alt="logo" className="logo"/>
        <div className="nav-wrapper col">
        <div className="row">
        <nav className="navbar navbar-light">
          <Link to="/main" className="navbar-brand">Trippr</Link>
          <ul className="nav navbar-nav col">
            {this.renderLinks()}
          </ul>
        </nav>
        </div>
        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps,)(Header)
