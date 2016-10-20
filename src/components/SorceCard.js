import React, {PropTypes, Component} from 'react';

class SorceCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sorceCardBox">
        <p className="content sourceContent">
          你做对了<span className="correctNum"></span>道题.
        </p>
        <div className="chooseBtn">
          <button className="btn confirmBtn">OK</button>
        </div>
      </div>
    );
  }
}

export default SorceCard;