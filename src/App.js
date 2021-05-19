import './App.css';
import React from 'react';
import background from './background.jpg'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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
