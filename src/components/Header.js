import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './HeaderStyles.css'

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <>
          <Link to="/signout">Signout</Link>
          <Link to="/dashboard">Dashboard</Link>
        </>
      )
    }
    return (
      <>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </>
    )
  }

  render() {
    return (
      <div className='header'>
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(
  mapStateToProps,
  {}
)(Header)
