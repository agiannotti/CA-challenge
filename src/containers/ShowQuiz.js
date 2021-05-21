import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectQuiz } from '../redux/actions/index';

class ShowQuiz extends Component {
  createQuizItems() {
    return this.props.quizzes.map((quiz, id) => (
      <li onClick={this.props.selectQuiz(quiz)} key={id}>
        {quiz.id}
        {quiz.title}
      </li>
    ));
  }
  render() {
    return <ul>{this.createQuizItems()}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    quizzes: state.quizzes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  bindActionCreators: () => dispatch({ selectQuiz: selectQuiz }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowQuiz);
