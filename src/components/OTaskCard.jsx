import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/OTaskCard.css'

import {
    IncreaseRbIcon,
    DecreaseRbIcon,
    PlayIcon,
    PriorityIcon,
    AssignProcessIcon,
    PauseProcessIcon,
    ToggleIcon,
} from '../Icons/AllIcons';
import SetPriorityDropMenu from '../components/SetPriorityDropMenu';
import ProgressBar from '../components/ProgressBar';

class TaskCard extends Component {

    state = {
        details: false,
        showPriorityMenu: false,

    }
    showDetails = (e) => {
        e.preventDefault();
        this.setState({ details: true })
    }
    hideDetails = (e) => {
        e.preventDefault();
        this.setState({ details: false })
    }
    showPriorityMenu = (e) => {
        e.preventDefault();
        this.setState({ showPriorityMenu: true })
    }
    hidePriorityMenu = (e) => {
        e.preventDefault();
        this.setState({ showPriorityMenu: false })
    }

    handleSetActive = (e) => {
        e.preventDefault();
        const { setActive, procId } = this.props;
        setActive(procId);
    }
    handleStopActive = (e) => {
        e.preventDefault();

        const { stopActive, procId } = this.props;
        stopActive(procId);
    }


    render() {
        let { details, showPriorityMenu } = this.state;
        const {
            setTaskPriority,
            procId,
            procName,
            procDescription,
            assigned,
            priority,
            workers,
            timeRemaining,
            avgTime,
            tasksTotal,
            tasksQueue,
            setActive
        } = this.props;
        console.log(priority)
        return (
            <div className='task-card-wrapper frame-box-shadow'>
                {showPriorityMenu && <div className='set-priority-menu' onClick={this.hidePriorityMenu}>
                    <SetPriorityDropMenu procId={procId} setTaskPriority={setTaskPriority} priority={priority} />
                </div>}
                <div className='task-first-column '>
                    <label className=' process-name-label label-text text-inner-shadow'>Name</label>
                    <h3 className='process-name '>{procName}</h3>
                    <span>{procDescription}</span>
                    <div className='details-wrapper '>
                        {assigned
                            ? details
                                ? <div className='details-bar-bar  ' onClick={this.hideDetails}>
                                    <ToggleIcon />
                                    <div className='progress-blur' >
                                        <table style={{ 'marginLeft': '50px' }}>
                                            <tbody>
                                                <tr>
                                                    <td width='200px' ><span>Tasks in queque:  <strong>{tasksQueue}</strong></span></td>
                                                    <td><span>Average time:  <strong>{avgTime}</strong></span></td>
                                                </tr>
                                                <tr>
                                                    <td width='200px'><span>Total tasks:  <strong>{tasksTotal}</strong></span></td>
                                                    <td><span>Time remaining:  <strong>{timeRemaining}</strong></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                : <div className='details-bar-bar' onClick={this.showDetails}><ToggleIcon /> <ProgressBar tasksTotal={tasksTotal} tasksQueue={tasksQueue} /></div>
                            : null
                        }
                    </div>
                </div>


                <div className='task-second-column '>
                    <div className='play-pause '>
                        {assigned
                            ? <button className='task-stop-icon' onClick={this.handleStopActive}></button>
                            : <button className='task-play-icon' onClick={this.handleSetActive}></button>
                        }
                    </div>
                    <h4 className='workers-assigned'>Workers assigned</h4>

                    <div className='workers-wrapper '>
                        <div className='plus-minus '>
                            <DecreaseRbIcon />
                        </div>
                        <span className='workers-number '>
                            {workers}/25
                        </span>
                        <div className='plus-minus '>
                            <IncreaseRbIcon />
                        </div>
                    </div>
                    <button onClick={this.showPriorityMenu} className='show-priority-button'> <PriorityIcon priority={priority} /></button>
                    <div className='assigned-status-wrapper'>
                        {assigned
                            ? <span className='assigned-bar'><AssignProcessIcon />Running</span>
                            : <span className='assigned-bar' onClick={this.showPriorityMenu}><AssignProcessIcon />

                                Unassigned
                            </span>
                        }
                    </div>


                </div>
            </div>
        );
    }
}
TaskCard.propTypes = {
    procId: PropTypes.number,
    procName: PropTypes.string,
    procDescription: PropTypes.string,
    assigned: PropTypes.bool,
    priority: PropTypes.number,
    workers: PropTypes.number,
    timeRemaining: PropTypes.string,
    avgTime: PropTypes.string,
    tasksTotal: PropTypes.number,
    tasksQueue: PropTypes.number,
}
TaskCard.defaultProps = {
    procName: 'This Default test name of a process',
    procDescription: 'A very temporary description of a process',
    assigned: false,
    priority: 0,
    workers: 0,
    timeRemaining: '2h',
    avgTime: '10m',
    tasksTotal: 66,
    tasksQueue: 66,
}
export default TaskCard;