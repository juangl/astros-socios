import React from 'react';
import { Col, CardDeck } from 'reactstrap';

import GalleryCard from './GalleryCard';

const GalleryCards = ({ galleries }) => (
  <Col md="12">
    {galleries.loading
      ? <div className="text-center">
          <icon className="fa fa-spinner fa-spin fa-5x fa-fw" />
        </div>
      : <CardDeck>
          {galleries.allAlbums
            .filter(gallery => gallery.images.length)
            .map(gallery => <GalleryCard key={gallery.id} gallery={gallery} />)}
        </CardDeck>}
  </Col>
);

export default GalleryCards;
