import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Alert } from 'reactstrap';
import styled from 'styled-components';
import { graphql } from 'react-apollo';

import { SIGNIN_MUTATION } from '../../constants/graphql';
import { setCookie } from '../../core/cookies';
import client from '../../networkClient';
import SignInForm from './components/SignInForm';

const MainContainer = styled(Container)`
  padding-top: 70px;
`;

class Login extends Component {
  state = {
    sccess: false,
    error: false,
  };

  _onSubmit = ({ email, password }) => {
    this.props
      .submit(email, password)
      .then(({ data }) => {
        this.setState({ error: false });
        setCookie('token', data.signinUser.token, 30);
        client.resetStore();
        this.setState({ error: false, success: true });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  };
  render() {
    const { location } = this.props;
    const { from } = location.state || { from: '/' };
    const to = from === '/login' ? '/admin' : from;
    if (this.state.success) {
      return <Redirect to={to} />;
    }
    return (
      <MainContainer>
        {this.state.error &&
          <Alert color="danger">
            <strong>Error: </strong>Usuario no encontrado
          </Alert>}
        <SignInForm onSubmit={this._onSubmit} />
      </MainContainer>
    );
  }
}

Login = graphql(SIGNIN_MUTATION, {
  props: ({ mutate }) => ({
    submit: (email, password) => mutate({ variables: { email, password } }),
  }),
})(Login);

export default Login;
