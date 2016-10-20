import React, {PropTypes, Component} from 'react';

class Progress extends Component {
  constructor(props) {
    super(props);

    this.isShow = props.isShow;
    this.state = {
      num: 1,
      isShow: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isShow: nextProps.isShow ? 'show' : ''
    });
  }

  render() {
    const nodeClass=`progressBox ${this.state.isShow}`;
    return (
      <div className={nodeClass}>
        <h3 className="progressTitle">问题</h3>
        <p className="progressNum">
          <span className="finishedNum">{this.state.num}</span>
          <span>&#8260;</span>
          <span className="totalNUm">10</span>
        </p>
      </div>
    );
  }
}

export default Progress;