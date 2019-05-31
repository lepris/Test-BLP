import React, { Component } from "react";
import "./App.css";
import { Button } from '../src/components/Button'


class App extends Component {

  render() {
    return <div className="App" />;
  }
}


App.defaultProps = {
  title: 'Just and emergency title'
}
export default App;
