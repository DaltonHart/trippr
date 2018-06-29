import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import { renderTextField } from './auth/form_helpers'


class EditProfile extends Component {
   render(){

      const {handleSubmit} = this.props
      return(
         <div>
            <h1> Edit Form </h1>
            <form onSubmit={handleSubmit}>

            <Field
              label="First Name"
              name="firstName"
              component={renderTextField}
              type="text"/>

           <Field
             label="Last Name"
             name="lastName"
             component={renderTextField}
             type="text"/>

             <Field
              label="Home City"
              name="homeCity"
              component={renderTextField}
              type="text"/>

           <RaisedButton type="submit" label="Submit" primary={true} labelColor={'#FFFFFF'}/>
          </form>
         </div>
      )
   }
}

export default reduxForm({
   form: 'edit'
})(EditProfile)
