import React, { Component } from 'react';
import Lightbox from '../../lib/react-image-lightbox';
import { graphql } from 'react-apollo';

import { ALL_IMAGES_FROM_ALBUM_QUERY } from '../../constants/graphql';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
    };
  }

  render() {
    const { history, data } = this.props;
    const {
      photoIndex,
    } = this.state;

    if (data.loading) {
      return null;
    }

    const { images } = data.Album;

    return (
      <Lightbox
        mainSrc={images[photoIndex].file.url}
        nextSrc={images[(photoIndex + 1) % images.length].file.url}
        prevSrc={images[(photoIndex + images.length - 1) % images.length].file.url}
        onCloseRequest={() => history.push('/')}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length,
          })}
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (photoIndex + 1) % images.length,
          })}
      />
    );
  }
}

Gallery = graphql(ALL_IMAGES_FROM_ALBUM_QUERY, {
  options: ({ match }) => ({ variables: { id: match.params.id } }),
})(Gallery);

export default Gallery;
