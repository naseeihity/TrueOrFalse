import React, {PropTypes, Component} from 'react';

class ResultCard extends Component {
  constructor(props) {
    super(props);

    this.visibility = props.visibility;

    this.state = {
      visibility: '',
      text: '',
      btnText:'OK',
      gameOver: false
    }

    this.confirmResult = this.confirmResult.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      visibility: nextProps.visibility ? 'show' : '',
      text: nextProps.isCorrect ? '正确!确实如此!' : '回答错误!'
    });
  }

  confirmResult() {
    if (this.state.gameOver) {
      this.resetGame();
      return true;
    }
    if (!this.props.isCorrect || this.props.doneAll) {
      this.showSorce();
    } else if (this.props.isCorrect) {
      this.showNext();
    }
  }

  showSorce() {
    const sorce = this.props.sorce;
    const Message = `你答对了${sorce}道题!`;
    const sorceMessage = sorce !== 10 ? Message : Message + '你赢了!';
    this.setState({
      text: sorceMessage,
      btnText: '再来一次',
      gameOver: true
    });
  }

  showNext() {
    const newState={
      resultCardShow: false
    };
    this.props.callback(newState);
  }

  resetGame(){
    this.setState({
      gameOver: false,
      btnText: 'OK'
    });
    const newState = {
      gameStart: false,
      questionCardShow: false,
      resultCardShow: false,
      index: 0,
      correctQuestionNum: 0
    }
    this.props.reset(newState);
  }

  render() {
    const nodeClass = `card resultCardBox ${this.state.visibility}`;
    const text = this.state.text;
    const btnText = this.state.btnText;
    return (
      <div className={nodeClass}>
        <p className="content answerContent">
          {text}
        </p>
        <div className="chooseBtn">
          <button className="btn confirmBtn" onClick={this.confirmResult}>{btnText}</button>
        </div>
      </div>
    );
  }
}

export default ResultCard;