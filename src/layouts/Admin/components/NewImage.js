import React, { Component } from 'react';
import styled from 'styled-components';

const InputLabel = styled.label`
  text-align: center;
  background: #ddd;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const InputFile = styled.input`
  display: none;
`;

const Icon = styled.i`
  padding: 1rem;
`;

class NewImage extends Component {
  state = {
    loading: false,
  };

  _onChange = () => {
    if (this.fileRef.files.length) {
      this.setState({ loading: true });
      this.props.onUpload(this.fileRef.files, this._onUploadFinish);
      this.fileRef.value = null;
    }
  };

  _onUploadFinish = fileData => {
    const { album, onCreateImage } = this.props;
    this.setState({ loading: false });
    onCreateImage('Imagen Nueva!', album.id, fileData.id);
  };

  render() {
    return (
      <InputLabel for="image-upload">
        {this.state.loading
          ? <Icon className="fa fa-spinner fa-spin fa-3x fa-fw" />
          : <Icon className="fa fa-plus-circle fa-2x" />}
        <InputFile
          innerRef={ref => this.fileRef = ref}
          type="file"
          id="image-upload"
          onChange={this._onChange}
          accept="image/*"
        />
      </InputLabel>
    );
  }
}

export default NewImage;
