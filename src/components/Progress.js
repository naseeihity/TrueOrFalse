import React, {PropTypes, Component} from 'react';

class Progress extends Component {
  constructor(props) {
    super(props);

    this.isShow = props.isShow;
    this.state = {
      num: 0,
      isShow: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isShow !== this.props.isShow) {
      this.setState({
        isShow: nextProps.isShow ? 'show' : '',
        num: 1
      });
    } else if (nextProps.question !== this.props.question) {
      const num = this.state.num + 1;
      this.setState({
        num
      });
    }
  }

  render() {
    const nodeClass=`progressBox ${this.state.isShow}`;
    const totalNum = 10;
    return (
      <div className={nodeClass}>
        <h3 className="progressTitle">问题</h3>
        <p className="progressNum">
          <span className="finishedNum">{this.state.num}</span>
          <span>&#8260;</span>
          <span className="totalNUm">{totalNum}</span>
        </p>
      </div>
    );
  }
}

export default Progress;