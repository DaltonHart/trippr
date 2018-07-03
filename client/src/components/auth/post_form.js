import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { renderTextField } from './form_helpers';

class PostForm extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oops: </strong>{this.props.errorMessage}
      </div>
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const {handleSubmit} = this.props

    console.log("this is the post form cities", this.props.cities)

    let menuItems = this.props.cities.map((option, index) => {
      return <MenuItem value={index} key={index} primaryText={option.name} label={option.name} onClick={this.logselect}/>
    });

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

          <DropDownMenu value="city" onChange={this.handleChange}>
            <MenuItem value="Select a city"/>
            {menuItems}
          </DropDownMenu>

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
