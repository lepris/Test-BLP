import React, { Component } from "react";
import "./App.css";
import ONavBar from './components/ONavBar';
import OTaskCard from './components/OTaskCard';
class App extends Component {
  state = {
    tasks: [1, 2, 3]
  }
  render() {
    const { tasks } = this.state;
    return (

      <div className='App' >


        <ONavBar />



        <div className='middle'>
          {tasks.map(task => <OTaskCard />)}




        </div>


      </div>
    )
  }
}



export default App;
