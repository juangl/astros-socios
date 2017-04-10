import React from 'react';
import {
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

let GalleryCard = ({ gallery, history }) => (
  <Card className="mb-3" onClick={() => history.push(`/gallery/${gallery.id}`)}>
    <CardImg
      top
      width="100%"
      src={gallery.images[0].file.url}
      alt={gallery.name}
    />
    <CardBlock>
      <CardTitle>{gallery.name}</CardTitle>
      <CardText>
        <Link to={`/gallery/${gallery.id}`}>Ver galeria completa ></Link>
      </CardText>
    </CardBlock>
  </Card>
);

GalleryCard = withRouter(GalleryCard);
export default GalleryCard;
