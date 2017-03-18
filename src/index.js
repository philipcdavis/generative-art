import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-51640724-1');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
