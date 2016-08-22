import React, { PropTypes as T } from 'react';
import Rebase from 're-base'
import { Modal,Button,Form,FormControl,FormGroup,Col,ControlLabel,Checkbox } from 'react-bootstrap'

const base = Rebase.createClass("fingersoldiers.firebaseapp.com")

class AdminLogin extends React.Component {
	
    constructor(props, context) {
        super(props, context);
        this.displayName = 'AdminLogin';
        this.state = {
        	error : ''
        }
    }
    handleSubmit(e){
    	var email_submit = e.target.email.value
    	var password_submit = e.target.password.value
    	base.authWithPassword({
		  email    : email_submit,
		  password : password_submit
		}, authHandler);

    	this.context.router.push('/admin')
    }

    render() {
    	firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    console.log(user)
		  } else {
		    // No user is signed in.
		  }
		});
        return (
			    <Modal.Dialog>
			      <Modal.Header>
			        <Modal.Title>Login</Modal.Title>
			      </Modal.Header>
			      <Modal.Body>
			      	<h5>{this.state.error}</h5>
			      	<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
					    <FormGroup controlId="formHorizontalEmail">
					      <Col componentClass={ControlLabel} sm={2}>
					        Email
					      </Col>
					      <Col sm={10}>
					        <input type="email" placeholder="Email" name="email" />
					      </Col>
					    </FormGroup>

					    <FormGroup controlId="formHorizontalPassword">
					      <Col componentClass={ControlLabel} sm={2}>
					        Password
					      </Col>
					      <Col sm={10}>
					        <input type="password" placeholder="Password" name="password" />
					      </Col>
					    </FormGroup>
					    <FormGroup>
					      <Col smOffset={2} sm={10}>
					        <Button style={{color:"black"}} type="submit">
					          Sign in
					        </Button>
					      </Col>
					    </FormGroup>
					  </Form>
			      </Modal.Body>
			    </Modal.Dialog>
        );
    }
}

AdminLogin.contextTypes = {
	    router: T.object
	}

export default AdminLogin;
