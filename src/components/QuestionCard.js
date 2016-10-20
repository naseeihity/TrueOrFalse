import React, {PropTypes, Component} from 'react';

class QuestionCard extends Component {
  constructor(props) {
    super(props);

    this.visibility = props.visibility;

    this.state = {
      visibility: ''
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      visibility: nextProps.visibility ? 'show' : ''
    });
  }

  render() {
    const nodeClass = `card questionCardBox ${this.state.visibility}`;
    return (
      <div className={nodeClass} >
        <p className="content questionContent">
          这是一个判断真假的问题.
        </p>
        <div className="chooseBtn">
          <button className="btn trueBtn">真相</button>
          <button className="btn falseBtn">谎言</button>
        </div>
      </div>
    );
  }
}

export default QuestionCard;