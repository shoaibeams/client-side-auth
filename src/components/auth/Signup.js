import React, { Component } from 'react'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps)
    this.props.history.push('/dashboard')
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create a new account!</h3>
        <fieldset>
          <Field
            placeholder="Email"
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <Field
            placeholder="Password"
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div style={{ color: 'red' }}>{this.props.errorMessage}</div>
        <button style={{ marginLeft: 2 }}>Sign Up!</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signup)
