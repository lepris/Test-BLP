import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '../src/components/Button'


function App({ title }) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>My Button component</Button>
      </header>
    </div>
  );
}

App.defaultProps = {
  title: 'Just and emergency title'
}
export default App;
