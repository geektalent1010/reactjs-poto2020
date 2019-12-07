import React from 'react';
import '../email_form/style.css';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Container, Row, Col, Modal, Image } from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import Hamburger_Menu from '../../components/hamburger_menu';
import Contact_Left from '../../components/contact_left'

class Email_Form extends React.Component {

  constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    show: false,
  }
  
  handleSubmit(e) {
    e.preventDefault()    
    
    const { name, email, subject, message } = this.state    
    
    let templateParams = {
      from_name: email,
      to_name: 'motasimfoad@gmail.com',
      subject: subject,
      message_html: message,
     }
     
     emailjs.send(
      'gmail',
      'template_OErNDyFu',
       templateParams,
      'user_64rGh5RuHtigw7paS8NsX'
     )
     .then((result) => {
        this.handleShow();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });     
        this.resetForm()
    }
    
    resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      modal: false,
    })
  }
  
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  
  render() {
    return (
  
          <Form onSubmit={this.handleSubmit.bind(this)} className="Contact-form">
            <p className="contact-form-header">Contact Form</p>
             <FormGroup controlId="formBasicEmail">
              <input
                type="email"
                name="email"
                value={this.state.email}
                className="contact_input"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email Address"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="contact_input"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Your Name"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
             <input
                type="text"
                name="subject"
                value={this.state.subject}
                className="contact_input"
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <input
                type="textarea"
                name="message"
                value={this.state.message}
                className="contact_input"
                onChange={this.handleChange.bind(this, 'message')}
                placeholder="Your text"
                required
              />
            </FormGroup>
            <br />
            <Button variant="outline-light" size="lg" type="submit">
              Submit
            </Button>
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                show={this.state.show} onHide={this.handleClose}
                centered
              >
            <Modal.Body className="contact_success_modal_body">
              <Image className="contact_success_modal_img" src="https://icon-library.net/images/success-icon/success-icon-5.jpg" />
              <h5>Email Successfully Delivered !!</h5>
              < br />
              <Button variant="outline-light" size="lg" onClick={this.handleClose}>Close</Button>
            </Modal.Body>
           
          </Modal>
          </Form>
    )
  }
}

export default Email_Form