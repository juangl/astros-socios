import React, { Component } from 'react';
import {
  Col,
  Row,
  Button,
  Card,
  CardBlock,
  CardFooter,
  CardHeader,
} from 'reactstrap';
import styled from 'styled-components';

import EditableBox from './EditableBox';
import NewImage from './NewImage';
import Image from './Image';

const AlbumCard = styled(Card)`
  margin-bottom: 10px;
`;

const AlbumCardBlock = styled(CardBlock)`
  padding: 0.7rem;
`;


class Album extends Component {
  _onUpdate = value => {
    const { album } = this.props;
    this.props.onUpdate(album.id, value);
  };
  render() {
    const {
      album,
      onDelete,
      onUpload,
      onCreateImage,
      onDeleteImage,
      onUpdateImage,
    } = this.props;
    return (
      <Col md="12">
        <AlbumCard>
          <CardHeader>
            <EditableBox onEdit={this._onUpdate} value={album.name} />
          </CardHeader>
          <AlbumCardBlock>
            <Row>
              {album.images.map(image => (
                <Image
                  key={image.id}
                  albumId={album.id}
                  onDeleteImage={onDeleteImage}
                  onUpdateImage={onUpdateImage}
                  image={image}
                />
              ))}
              <Col sm="3">
                <NewImage
                  album={album}
                  onUpload={onUpload}
                  onCreateImage={onCreateImage}
                />
              </Col>
            </Row>
          </AlbumCardBlock>
          <CardFooter>
            <Button onClick={() => onDelete(album.id)} color="danger">
              Borrar Album
            </Button>
          </CardFooter>
        </AlbumCard>
      </Col>
    );
  }
}

export default Album;
