import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { selectQuiz } from '../redux/actions/index';

class ShowQuiz extends Component {
  generateQuiz() {
    return this.props.quizzes.map((quiz, id) => (
      <li key={id}>
        {quiz.id}
        {quiz.title}
      </li>
    ));
  }

  render() {
    return (
      <>
        <ul>{this.generateQuiz()}</ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizzes: state.quizzes,
  };
};

export default connect(mapStateToProps)(ShowQuiz);
