import React, {PropTypes, Component} from 'react';

class ResultCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card resultCardBox">
        <p className="content answerContent">
          正确!确实如此!
        </p>
        <div className="chooseBtn">
          <button className="btn confirmBtn">OK</button>
        </div>
      </div>
    );
  }
}

export default ResultCard;