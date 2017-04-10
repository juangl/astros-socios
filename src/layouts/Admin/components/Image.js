import React from 'react';
import {
  Col,
  Card,
  CardImg,
  CardBlock,
  CardText,
  CardFooter,
  Button,
} from 'reactstrap';

import EditableBox from './EditableBox';

const Image = (
  { image, albumId, onDeleteImage, onEditImage, onUpdateImage },
) => (
  <Col md="3">
    <Card className="mb-3">
      <CardImg top width="100%" src={image.file.url} alt="Card image cap" />
      <CardBlock>
        <CardText tag="div">
          <EditableBox
            onEdit={value => onUpdateImage(image.id, value)}
            value={image.description}
          />
        </CardText>
      </CardBlock>
      <CardFooter>
        <Button
          onClick={() => onDeleteImage(albumId, image.id, image.file.id)}
          color="danger">
          Borrar
        </Button>
      </CardFooter>
    </Card>
  </Col>
);

export default Image;
