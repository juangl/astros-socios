import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';
import { graphql } from 'react-apollo';
import { Element } from 'react-scroll';

import ContactForm from './components/ContactForm';
import { CREATE_MESSAGE_MUTATION } from '../../../../constants/graphql';
const MainFooter = styled.footer`
  color: #ccc;
  background-color: ${({ theme }) => theme.primaryColor};
`;

const FooterTitleRow = styled.div`
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.gray};
`;

let Contact = ({ submitMessage }) => (
  <Element name="contact">
  <MainFooter>
    <FooterTitleRow>
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <h2>Cotizacióon gratuita</h2>
            <h3>Contáctanos o déjanos tu mensaje</h3>
          </Col>
        </Row>
      </Container>
    </FooterTitleRow>
    <Container className="py-5">
      <Row>
        <Col md="6" xs="12" sm="12">
          <h3 className="mb-3">Datos de contacto</h3>
          <address>
            Corregidora #115, Santa María del Valle, Jalisco
            <br />
            <strong>Teléfono:</strong> 348 - 718 - 4337
            <br />
            <strong>Celular:</strong> 348 - 106 - 6846
            <br />
            <strong>Celular:</strong> 348 - 104 - 5224
          </address>
        </Col>
        <Col md="6" xs="12" sm="12">
          <ContactForm submitMessage={submitMessage} />
        </Col>
      </Row>
      <Row className="py-5 mt-2">
        <Col md="12" className="text-center">
          &copy;2017 Astros & Socios. Todos los derechos recervados
        </Col>
      </Row>
    </Container>
  </MainFooter>
  </Element>
);

Contact = graphql(CREATE_MESSAGE_MUTATION, {
  props: ({ mutate }) => ({
    submitMessage: (name, phone, message) => mutate({ variables: { name, phone, message } }),
  }),
})(Contact);

export default Contact;
