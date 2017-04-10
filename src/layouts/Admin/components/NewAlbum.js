import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'reactstrap';

const AddAlbumBox = styled.div`
  background: #eee;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
`;


const NewAlbum = ({ onClick }) => (
  <Container>
    <Row>
      <Col md="12" onClick={onClick}>
        <AddAlbumBox>
          <i className="fa fa-plus-circle fa-5x" />
        </AddAlbumBox>
      </Col>
    </Row>
  </Container>
);

export default NewAlbum;
