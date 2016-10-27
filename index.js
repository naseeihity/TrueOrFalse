import React from 'react';
import ReactDOM from 'react-dom';
import TrueOrFalse from './src/components/TrueOrFalse';

import Questions from './src/components/ConstValue/Questions';
import BackgroundColors from './src/components/ConstValue/BackgroundColors';

import 'normalize.css';
import './src/css/base.css';

ReactDOM.render(
  <TrueOrFalse question={Questions} bgColor={BackgroundColors} />, document.getElementById('content')
  );