import { gql } from 'react-apollo';

const fileAllProps = `
  id,
  url
`;

const imageAllProps = `
  id,
  description,
  file {
    ${fileAllProps}
  }
`;

const albumAllProps = `
  name,
  id,
  images {
    ${imageAllProps}
  }
`;

export const USER_QUERY = gql`
  query userQuery {
    user {
      id
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation signinMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }){
      token
    }
  }
`;

export const ALL_ALBUMS_QUERY = gql`
  query allAlbumsQuery {
    allAlbums {
      ${albumAllProps}
    }
  }
`;

export const ALL_ALBUMS_COVER_QUERY = gql`
  query allAlbumsQuery {
    allAlbums {
      id,
      name,
      images(first: 1) {
        file {
          url
        }
      }
    }
  }
`;

export const ALL_IMAGES_FROM_ALBUM_QUERY = gql`
  query allImagesFromAlbumQuery($id: ID!) {
    Album(id: $id) {
      images {
        file {
          url
        }
      }
    }
  }
`;

export const CREATE_ALBUM_MUTATION = gql`
  mutation createAlbumMutation($name: String!) {
   createAlbum(name: $name) {
      ${albumAllProps}
    } 
  }
`;

export const DELETE_ALBUM_MUTATION = gql`
  mutation deleteAlbumMutation($id: ID!) {
    deleteAlbum(id: $id) {
      ${albumAllProps}
    }
  }
`;

export const UPDATE_ALBUM_MUTATION = gql`
  mutation updateAlbumMutation($id: ID!, $name: String!) {
    updateAlbum(id: $id, name: $name) {
      name
    }
  }
`;

export const CREATE_IMAGE_MUTATION = gql`
  mutation createImageMutation($description: String!, $albumId: ID!, $fileId: ID!) {
    createImage(description: $description, albumId: $albumId, fileId: $fileId) {
      ${imageAllProps}
    }
  }
`;

export const DELETE_IMAGE_MUTATION = gql`
  mutation deleteImageMutation($imageId: ID!, $fileId: ID!) {
    deleteImage(id: $imageId) {
      ${imageAllProps}
    }
    deleteFile(id: $fileId) {
      id
    }
  }
`;

export const UPDATE_IMAGE_MUTATION = gql`
  mutation updateImageMutation($id: ID!, $description: String!) {
    updateImage(id: $id, description: $description) {
      ${imageAllProps}
    }
  }
`;

export const CREATE_MESSAGE_MUTATION = gql`
  mutation createMessageMutation($name: String!, $phone: String!, $message: String!) {
    createMessage(name: $name, phone: $phone, message: $message) {
      id
    }
  }
`;
