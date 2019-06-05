import React, { Component } from "react";
import "./App.css";
import ONavBar from './components/ONavBar';
import OTaskCard from './components/OTaskCard';
import { newProcesses } from './data/sample_processes';
class App extends Component {
  state = {
    workersTotal: 25
  }
  componentDidMount() {
    this.setState({ processes: newProcesses })
  }
  setActive = (processId) => {
    const { processes } = this.state;
    let tempProcess = processes.map(proc =>
      proc.procId === processId ? { ...proc, assigned: true } : proc
    )
    this.setState({ processes: tempProcess })
  }
  stopActive = (processId) => {
    const { processes } = this.state;
    let tempProcess = processes.map(proc =>
      proc.procId === processId ? { ...proc, assigned: false } : proc
    )
    this.setState({ processes: tempProcess })
  }
  setTaskPriority = (newPriority, processId) => {

    const { processes } = this.state;
    let tempProcess = processes.map(proc =>
      proc.procId === processId ? { ...proc, priority: +newPriority } : proc
    )

    this.setState({ processes: tempProcess })
  }


  render() {
    let { processes } = this.state;


    return (

      <div className='App' >


        <ONavBar />



        <div className='middle'>
          {processes && processes.map(proc => <OTaskCard setTaskPriority={this.setTaskPriority} stopActive={this.stopActive} setActive={this.setActive} key={proc.procId} {...proc} />)}




        </div>


      </div>
    )
  }
}



export default App;
