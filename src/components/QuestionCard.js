import React, {PropTypes, Component} from 'react';

class QuestionCard extends Component {
  constructor(props) {
    super(props);

    this.visibility = props.visibility;

    this.state = {
      visibility: '',
      question: props.question
    }

    this.chooseAns = this.chooseAns.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      visibility: nextProps.visibility ? 'show' : '',
      question: nextProps.question
    });
  }

  chooseAns(ans) {
    const oldSorce = this.props.sorce;
    const isCorrect = this.state.question.value === ans ? true : false ;
    const sorce = isCorrect ? oldSorce + 1 : oldSorce
    const newState={
      resultCardShow: true,
      questionCardShow: false,
      correctQuestionNum: sorce,
      isCorrect
    };
    this.props.callback(newState);
  }

  render() {
    const nodeClass = `card questionCardBox ${this.state.visibility}`;
    const question = this.state.question.text;
    return (
      <div className={nodeClass} >
        <p className="content questionContent">
          {question}
        </p>
        <div className="chooseBtn">
          <button className="btn trueBtn" onClick={() => this.chooseAns(1)}>真相</button>
          <button className="btn falseBtn" onClick={() => this.chooseAns(0)}>谎言</button>
        </div>
      </div>
    );
  }
}

export default QuestionCard;