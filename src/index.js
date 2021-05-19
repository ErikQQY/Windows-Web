import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';
import App from './App';
import reportWebVitals from './reportWebVitals';
import background from './background.jpg'
import Button from 'react-desktop/windows';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { render } from '@testing-library/react';

function TasksBar() {
  return (
    <Button>
        Press me!
      </Button>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
