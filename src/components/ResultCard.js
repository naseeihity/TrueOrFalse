import React, {PropTypes, Component} from 'react';

class ResultCard extends Component {
  constructor(props) {
    super(props);

    this.visibility = props.visibility;

    this.state = {
      visibility: '',
      text: ''
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
    if (!this.props.isCorrect || this.props.doneAll) {
      this.showSorce();
    } else if (this.props.isCorrect) {
      this.showNext();
    }
  }

  showSorce() {

  }

  showNext() {
    const newState={
      resultCardShow: false
    };
    this.props.callback(newState);
  }

  render() {
    const nodeClass = `card resultCardBox ${this.state.visibility}`;
    const text = this.state.text;
    return (
      <div className={nodeClass}>
        <p className="content answerContent">
          {text}
        </p>
        <div className="chooseBtn">
          <button className="btn confirmBtn" onClick={this.confirmResult}>OK</button>
        </div>
      </div>
    );
  }
}

export default ResultCard;