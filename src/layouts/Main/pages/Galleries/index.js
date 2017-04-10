import React from 'react';
import { Container, Col } from 'reactstrap';
import { graphql } from 'react-apollo';
import { Element } from 'react-scroll';

import { ALL_ALBUMS_COVER_QUERY } from '../../../../constants/graphql';
import GalleryCards from './components/GalleryCards';

let Galleries = ({ data }) => (
  <Element name="galleries">
    <section>
      <Container>
        <Col md="12">
          <h2 className="text-primary">Galerías</h2>
        </Col>
        <GalleryCards galleries={data} />
      </Container>
    </section>
  </Element>
);

Galleries = graphql(ALL_ALBUMS_COVER_QUERY)(Galleries);

export default Galleries;
