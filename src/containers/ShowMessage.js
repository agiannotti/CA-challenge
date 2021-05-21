import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ShowMessages extends Component {
  render() {
    return (
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    );
  }
}

export default ShowMessages;
