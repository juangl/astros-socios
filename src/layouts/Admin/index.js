import React, { Component } from 'react';
import {
  Container,
} from 'reactstrap';
import { graphql } from 'react-apollo';
import update from 'immutability-helper';
import styled from 'styled-components';

import compose from '../../core/compose';
import {
  CREATE_ALBUM_MUTATION,
  DELETE_ALBUM_MUTATION,
  UPDATE_ALBUM_MUTATION,
  CREATE_IMAGE_MUTATION,
  DELETE_IMAGE_MUTATION,
  UPDATE_IMAGE_MUTATION,
  ALL_ALBUMS_QUERY,
} from '../../constants/graphql';
import { REACT_APP_GRAPHQL_ENDPOINT } from '../../constants/config';
import { getCookie } from '../../core/cookies';
import NewAlbum from './components/NewAlbum';
import Albums from './components/Albums';

const MainContainer = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

class Admin extends Component {
  _uploadImage = (files, cb) => {
    // prepare form data, use data key!
    const token = getCookie('token');
    const data = new FormData();
    const headers = new Headers({
      authorization: token ? `Bearer ${token}` : null,
    });
    data.append('data', files[0]);
    // use the file endpoint
    fetch(REACT_APP_GRAPHQL_ENDPOINT.replace('simple/', 'file/'), {
      method: 'POST',
      body: data,
      headers,
    })
      .then(response => response.json())
      .then(image => cb(image));
  };
  _createNewAlbum = () => {
    this.props.createAlbum('Nuevo Album!');
  };
  render() {
    const { data } = this.props;
    return (
      <MainContainer>
        <Albums
          onDelete={this.props.deleteAlbum}
          onUpdate={this.props.updateAlbum}
          onUpload={this._uploadImage}
          allAlbums={data.allAlbums}
          onDeleteImage={this.props.deleteImage}
          onCreateImage={this.props.createImage}
          onUpdateImage={this.props.updateImage}
        />
        <NewAlbum onClick={this._createNewAlbum} />
      </MainContainer>
    );
  }
}

Admin = compose(
  graphql(CREATE_ALBUM_MUTATION, {
    props: ({ mutate }) => ({
      createAlbum: name =>
        mutate({
          variables: { name },
          updateQueries: {
            allAlbumsQuery: (prev, { mutationResult }) => {
              return update(prev, {
                allAlbums: {
                  $push: [mutationResult.data.createAlbum],
                },
              });
            },
          },
        }),
    }),
  }),
  graphql(DELETE_ALBUM_MUTATION, {
    props: ({ mutate }) => ({
      deleteAlbum: id =>
        mutate({
          variables: { id },
          updateQueries: {
            allAlbumsQuery: (prev, { mutationResult }) => {
              const updatedList = prev.allAlbums.filter(
                album => album.id !== id,
              );
              return { ...prev, allAlbums: updatedList };
            },
          },
        }),
    }),
  }),
  graphql(UPDATE_ALBUM_MUTATION, {
    props: ({ mutate }) => ({
      updateAlbum: (id, name) =>
        mutate({
          variables: { id, name },
        }),
    }),
  }),
  graphql(CREATE_IMAGE_MUTATION, {
    props: ({ mutate }) => ({
      createImage: (description, albumId, fileId) =>
        mutate({
          variables: { description, albumId, fileId },
          updateQueries: {
            allAlbumsQuery: (prev, { mutationResult, queryVariables }) => {
              const prevAlbumIndex = prev.allAlbums.findIndex(
                album => album.id === albumId,
              );
              return update(prev, {
                allAlbums: {
                  [prevAlbumIndex]: {
                    images: {
                      $push: [mutationResult.data.createImage],
                    },
                  },
                },
              });
            },
          },
        }),
    }),
  }),
  graphql(DELETE_IMAGE_MUTATION, {
    props: ({ mutate }) => ({
      deleteImage: (albumId, imageId, fileId) =>
        mutate({
          variables: { imageId, fileId },
          updateQueries: {
            allAlbumsQuery: (prev, { mutationResult, queryVariables }) => {
              const albumIndex = prev.allAlbums.findIndex(
                album => album.id === albumId,
              );
              const updateImages = prev.allAlbums[albumIndex].images.filter(
                image => image.id !== mutationResult.data.deleteImage.id,
              );
              return update(prev, {
                allAlbums: {
                  [albumIndex]: {
                    images: {
                      $set: updateImages,
                    },
                  },
                },
              });
            },
          },
        }),
    }),
  }),
  graphql(UPDATE_IMAGE_MUTATION, {
    props: ({ mutate }) => ({
      updateImage: (id, description) =>
        mutate({
          variables: { id, description },
        }),
    }),
  }),
  graphql(ALL_ALBUMS_QUERY),
)(Admin);

export default Admin;
