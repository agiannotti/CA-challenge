import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowMessages extends Component {
  showMessage() {
    return <div>{this.props.messages}</div>;
  }
  render() {
    return <div>{this.showMessage()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps)(ShowMessages);
