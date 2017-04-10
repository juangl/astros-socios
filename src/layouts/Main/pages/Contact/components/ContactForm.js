import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Alert } from 'reactstrap';

class ContactForm extends Component {
  state = {
    submitSuccess: false,
  };
  _onSubmit = e => {
    e.preventDefault();
    this.props
      .submitMessage(
        this.nameRef.value,
        this.telRef.value,
        this.messageRef.value,
      )
      .then(() => this.setState({ submitSuccess: true }));

    this.nameRef.value = '';
    this.telRef.value = '';
    this.messageRef.value = '';
  };

  render() {
    return (
      <div>
        {this.state.submitSuccess &&
          <Alert color="success">
            <strong>¡Gracias por tu mensaje!</strong>
            {' '}
            recibirás respuesta pronto.
          </Alert>}
        <Form onSubmit={this._onSubmit}>
          <FormGroup>
            <Input
              required
              getRef={ref => this.nameRef = ref}
              type="text"
              name="name"
              id="contactName"
              placeholder="Nombre"
            />
          </FormGroup>
          <FormGroup>
            <Input
              required
              getRef={ref => this.telRef = ref}
              type="tel"
              name="phone"
              id="contactPhone"
              placeholder="Teléfono"
            />
          </FormGroup>
          <FormGroup>
            <Input
              required
              getRef={ref => this.messageRef = ref}
              type="textarea"
              name="message"
              placeholder="Tu mensaje"
              id="contactMessage"
            />
          </FormGroup>
          <Button>Enviar</Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
