import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import { renderTextField } from './form_helpers'

class PostForm extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oops: </strong>{this.props.errorMessage}
      </div>
    }
  }

  render() {
    const {handleSubmit} = this.props

    return (
      <div className="PostForm">
        {this.renderAlert()}
        <form onSubmit={handleSubmit}>

        <Field
          label="Title"
          name="title"
          component={renderTextField}
          type="text"/>

          <Field
            label="Message"
            name="message"
            component={renderTextField}
            type="text"/>

          <Field
            label="City"
            name="city"
            component={renderTextField}
            type="text"/>

          <RaisedButton type="submit" label="Submit post" primary={true} labelColor={'#FFFFFF'}/>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Please enter a title'
  }

  if (!values.message) {
    errors.message = 'Please enter a message'
  }

  if (!values.city) {
    errors.city = 'Please select a city'
  }

  return errors
}


export default reduxForm({
  form: 'postform',
  validate
})(PostForm)
