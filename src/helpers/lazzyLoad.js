import React, { Component } from 'react';

const lazyLoad = (getComponent) => {
  return class LazyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        WrapperComponent: null,
      };
    }

    componentDidMount() {
      getComponent().then((WrapperComponent) => {
        this.setState({ WrapperComponent });
      });
    }

    render() {
      const { WrapperComponent } = this.state;
      if (WrapperComponent) {
        return <WrapperComponent {...this.props} />;
      }
      return null;
    }
  };
};

export default lazyLoad;
