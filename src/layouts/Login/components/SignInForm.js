import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button, Alert } from 'reactstrap';
import styled from 'styled-components';

const LoginForm = styled(Form)`
  max-width: 500px;
  margin: 0 auto;
`;

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <div>
        {this.props.errorMessage &&
          <Alert color="danger">
            <strong>Oh snap!</strong> {this.props.errorMessage}
          </Alert>}

        <LoginForm onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="userInput" sm={3}>Usuario</Label>
            <Col sm={9}>
              <Input
                type="text"
                required
                value={this.state.email}
                onChange={event =>
                  this.setState({ email: event.target.value })}
                name="user"
                id="userInput"
                placeholder="email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="passwordInput" sm={3}>Contraseña:</Label>
            <Col sm={9}>
              <Input
                type="password"
                required
                value={this.state.password}
                onChange={event =>
                  this.setState({ password: event.target.value })}
                name="password"
                id="passwordInput"
                placeholder="password"
              />
            </Col>
          </FormGroup>
          <Button color="primary" block>Submit</Button>
        </LoginForm>
      </div>
    );
  }
}

export default SignInForm;
