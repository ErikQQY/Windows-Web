import './App.css';
import React, { Component } from 'react';
import background from './background.jpg'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { render } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function TasksBar() {
  return (
    <Button>
        Press me!
      </Button>
  );
}

function App() {
  return (
      <div className='App-component' style={{ backgroundImage: `url(${background})` }}>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <h1>Windows</h1>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      </div>

  );
}

export default App;
