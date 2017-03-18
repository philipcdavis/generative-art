import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-51640724-1');
ReactGA.set({ page: window.location.pathname });
ReactGA.pageview(window.location.pathname);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
