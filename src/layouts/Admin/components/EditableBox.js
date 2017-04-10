import React, { Component } from 'react';
import styled from 'styled-components';

const TextContainer = styled.span`
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
`;
 
class EditableBox extends Component {
  state = {
    editable: false,
    value: '',
  };

  _setValue(value) {
    this.setState({ value });
  }

  _startEdit = () => {
    this.setState({ editable: true });
  };

  _finishEdit = event => {
    const { onEdit } = this.props;
    event.preventDefault();
    this.setState({ editable: false });
    if (onEdit) {
      onEdit(this.state.value);
    }
  };

  _onChange = event => {
    this._setValue(event.target.value);
  };

  componentDidMount() {
    this._setValue(this.props.value);
  }

  componentWillReceiveProps({ value }) {
    this._setValue(value);
  }

  render() {
    const { value, editable } = this.state;
    if (editable) {
      return (
        <form onSubmit={this._finishEdit}>
          <Input
            innerRef={ref => {
              if (ref) ref.focus();
            }}
            onChange={this._onChange}
            onBlur={this._finishEdit}
            type="text"
            value={value}
          />
        </form>
      );
    } else {
      return (
        <TextContainer onClick={this._startEdit}>
          {value + ' '}<i className="fa fa-pencil" aria-hidden="true" />
        </TextContainer>
      );
    }
  }
}

export default EditableBox;
