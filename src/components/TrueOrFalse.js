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
    }
    this.gameInit = this.gameInit.bind(this);
    this.reset = this.reset.bind(this);
  }

  gameInit() {
    this.setState({
      gameStart: true,
      questionCardShow: true
    });
  }

  reset(newState) {
    this.setState(newState);
  }

  renderGameContent() {
    const visibility = this.state.questionCardShow;
    const isShow = this.state.gameStart;
    return (
      <div>
        <QuestionCard visibility={visibility} />
        <Progress isShow={isShow} />
        <RestartBtn isShow={isShow} callback={this.reset} />
        <ResultCard />
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