import React, { Component } from "react";
import "./App.css";
import ONavBar from './components/ONavBar';
import OTaskCard from './components/OTaskCard';
import { newProcesses } from './data/sample_processes';
class App extends Component {
  state = {
    workersTotal: 25,
    workersAvailable: 25,
    runningProcesses: 0
  }
  componentDidMount() {
    this.setState({ processes: newProcesses })
  }

  setActive = (processId) => {
    const { processes, runningProcesses, workersTotal } = this.state;
    let newRunning = runningProcesses + 1;
    let newUnitWorkers = Math.round(workersTotal / newRunning)
    let equalWorkers = (workersTotal - newUnitWorkers) / (newRunning - 1);

    let tempProcess = processes.map(proc =>
      proc.procId === processId
        ? { ...proc, assigned: true, workers: newUnitWorkers }
        : proc.assigned
          ? { ...proc, workers: equalWorkers }
          : proc
    )
    this.setState({ processes: tempProcess, runningProcesses: newRunning })
  }

  addWorker = (processId, workers) => {
    const { processes, runningProcesses, workersTotal } = this.state;
    let newUnitWorkers = workers + 1;
    let equalWorkers = (workersTotal - newUnitWorkers) / (runningProcesses - 1);


    let tempProcess = processes.map(proc =>
      proc.procId === processId
        ? { ...proc, workers: newUnitWorkers }
        : proc.assigned
          ? { ...proc, workers: equalWorkers }
          : proc

    )

    this.setState({ processes: tempProcess })
  }

  minusWorker = (processId, workers) => {
    const { processes, runningProcesses, workersTotal } = this.state;
    let newUnitWorkers = workers - 1;
    let equalWorkers = (workersTotal - newUnitWorkers) / (runningProcesses - 1);


    let tempProcess = processes.map(proc =>
      proc.procId === processId
        ? { ...proc, workers: newUnitWorkers }
        : proc.assigned
          ? { ...proc, workers: equalWorkers }
          : proc

    )
    this.setState({ processes: tempProcess })
  }


  stopActive = (processId) => {
    const { processes, runningProcesses, workersTotal } = this.state;
    let newRunning = runningProcesses - 1;
    let equalWorkers = workersTotal / newRunning;
    let tempProcess = processes.map(proc =>
      proc.procId === processId
        ? { ...proc, assigned: false, workers: 0 }
        : proc.assigned
          ? { ...proc, workers: equalWorkers }
          : proc
    )
    this.setState({ processes: tempProcess, runningProcesses: newRunning })
  }

  setTaskPriority = (newPriority, processId) => {

    const { processes } = this.state;
    let tempProcess = processes.map(proc =>
      proc.procId === processId ? { ...proc, priority: +newPriority } : proc
    )

    this.setState({ processes: tempProcess })
  }




  render() {
    let { processes, runningProcesses } = this.state;


    return (

      <div className='App' >


        <ONavBar />


        <h2>{runningProcesses}</h2>
        <div className='middle'>
          {processes && processes.map(proc =>
            <OTaskCard
              setTaskPriority={this.setTaskPriority}
              stopActive={this.stopActive}
              setActive={this.setActive}
              addWorker={this.addWorker}
              minusWorker={this.minusWorker}
              key={proc.procId} {...proc} />)}




        </div>


      </div>
    )
  }
}



export default App;
