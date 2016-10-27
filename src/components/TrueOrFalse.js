import React, {PropTypes, Component} from 'react';
import QuestionCard from './QuestionCard';
import ResultCard from './ResultCard';
import SourceCard from './SorceCard';
import Progress from './Progress';
import RestartBtn from './RestartBtn';

class TrueOrFalse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameStart: false,
      questionCardShow: false,
      resultCardShow: false,
      question: 'No question',
      isCorrect: false,
      doneAll: false,
      index: 0,
      correctQuestionNum: 0,
      randomQuestions: []
    }
    this.gameInit = this.gameInit.bind(this);
    this.reset = this.reset.bind(this);
    this.showResult = this.showResult.bind(this);
    this.showNextQuestion = this.showNextQuestion.bind(this);
    this.updateState = this.updateState.bind(this);
    this.getSorce = this.getSorce.bind(this);
  }

  gameInit() {
    const allQuestions = this.props.question;
    const randomQuestions = this.selectQuestion(allQuestions);
    const question = randomQuestions[0];
    this.updateState({
      gameStart: true,
      questionCardShow: true,
      randomQuestions: randomQuestions,
      question: question
    });
  }

  selectQuestion(questions) {
    const len = questions.length;
    const idArr = this.getRandomNum(len);
    let randomQuestions = [];
    idArr.forEach((id) => {
      randomQuestions.push(questions[id]);
    });
    return randomQuestions;
  }

  getRandomNum(len) {
    const min = 0,
          max = len - 1;
    let arr = [];
    while (arr.length < 10) {
      const randomNum = Math.floor(Math.random() * (max - min + 1) + min);// 创建min-max间的随机数
      let flag = false;
      for(let i=0; i < arr.length; i++) {
        if (arr[i] === randomNum) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        arr[arr.length] = randomNum;
      }
    }
    return arr;
  }

  reset(newState) {
    this.updateState(newState);
  }

  showResult(newState) {
    if (newState.correctQuestionNum === 10) {
      newState = Object.assign({}, newState, {doneAll: true});
    }
    this.updateState(newState);
  }

  showNextQuestion(newState) {
    let _index = this.state.index + 1;
    const allQuestions = this.state.randomQuestions;
    const selectedQuestions = allQuestions[_index];
    const state = Object.assign({}, newState, {question:selectedQuestions,index:_index});
    this.updateState(state);
    setTimeout(() => {
      this.updateState({
        questionCardShow: true
      })
    },200);
  }

  getSorce(newState) {
    this.updateState(newState);
  }

  updateState(newState) {
    this.setState(newState);
  }

  renderGameContent() {
    const questionShow = this.state.questionCardShow;
    const isShow = this.state.gameStart;
    const resultShow = this.state.resultCardShow;
    return (
      <div>
        <QuestionCard
          visibility={questionShow}
          question={this.state.question}
          sorce={this.state.correctQuestionNum}
          callback={this.showResult}
        />
        <Progress
          isShow={isShow}
          question={this.state.question.id}
          callback={this.getSorce}
        />
        <RestartBtn
          isShow={isShow}
          callback={this.reset}
        />
        <ResultCard
          visibility={resultShow}
          isCorrect={this.state.isCorrect}
          doneAll={this.state.doneAll}
          sorce={this.state.correctQuestionNum}
          callback={this.showNextQuestion}
          reset={this.reset}
        />
      </div>
    );
  }

  render() {
    const gameStart = this.state.gameStart;
    const startBtnStyle = {
      display: gameStart ? 'none' : 'block'
    }
    return (
      <div className="appContent">
        <button
          className="btn startBtn"
          style={startBtnStyle}
          onClick={this.gameInit}
        >
          开始
        </button>
        <div className="gameContent">
          {this.renderGameContent()}
        </div>
      </div>
    );
  }
}

export default TrueOrFalse;