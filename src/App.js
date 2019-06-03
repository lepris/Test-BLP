import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {
    return (
    
    <div className='App' >
      <div className='main-column'>
        <nav>

        </nav>
        <div className='task-list'>
        </div>
      </div>

    </div>
    )
  }
}


App.defaultProps = {
  title: 'Just and emergency title'
}
export default App;
