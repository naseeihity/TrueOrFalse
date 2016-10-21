import React, {PropTypes, Component} from 'react';

class RestartBtn extends Component {
  constructor(props) {
    super(props);

    this.isShow = props.isShow;
    this.state = {
      isShow: ''
    }
    this.reset = this.reset.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isShow: nextProps.isShow ? 'show' : ''
    });
  }

  reset(){
    const newState = {
      gameStart: false,
      questionCardShow: false,
      resultCardShow: false
    }
    this.props.callback(newState);
  }

  render() {
    const nodeClass=`restartBtn ${this.state.isShow}`
    return (
      <div className={nodeClass} onClick={this.reset} >
        <span className="restartIcon"></span>
      </div>
    );
  }
}

export default RestartBtn;