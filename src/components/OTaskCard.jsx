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
import ProgressBar from '../components/ProgressBar';

class TaskCard extends Component {

    state = {
        showAssignMenu: false,
        showPriorityMenu: false
    }
    render() {
        const {
            procName,
            procDescription,
            assigned,
            priority,
            workers,
            details,
            timeRemaining,
            avgTime,
            tasksTotal,
            tasksQueue,
        } = this.props;
        return (
            <div className='task-card-wrapper frame-box-shadow'>
                <div className='task-first-column '>
                    <label className=' process-name-label label-text text-inner-shadow'>Name</label>
                    <h3 className='process-name '>{procName}</h3>
                    <span>{procDescription}</span>
                    <div className='details-wrapper '>
                        {assigned
                            ? details
                                ? <div className='details-bar-bar '>
                                    <ToggleIcon />
                                    <div className='progress-blur' >
                                        <table style={{ 'margin-left': '50px' }}>
                                            <tr>
                                                <td width='200px' ><span>Tasks in queque:  <strong>{tasksQueue}</strong></span></td>
                                                <td><span>Average time:  <strong>{avgTime}</strong></span></td>
                                            </tr>
                                            <tr>
                                                <td width='200px'><span>Total tasks:  <strong>{tasksTotal}</strong></span></td>
                                                <td><span>Time remaining:  <strong>{timeRemaining}</strong></span></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                : <div className='details-bar-bar '><ToggleIcon /> <ProgressBar tasksTotal={tasksTotal} tasksQueue={tasksQueue} /></div>
                            : null
                        }
                    </div>
                </div>


                <div className='task-second-column '>
                    <div className='play-pause '>
                        {assigned
                            ? <PauseProcessIcon />
                            : <PlayIcon />
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
                    <PriorityIcon priority={priority} />
                    <div className='assigned-status-wrapper'>
                        {assigned
                            ? <span className='assigned-bar'><AssignProcessIcon />Running</span>
                            : <span className='assigned-bar'><AssignProcessIcon />Unassigned</span>
                        }
                    </div>


                </div>
            </div>
        );
    }
}
TaskCard.propTypes = {
    procName: PropTypes.string,
    procDescription: PropTypes.string,
    assigned: PropTypes.bool,
    priority: PropTypes.number,
    workers: PropTypes.number,
    details: PropTypes.bool,
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
    details: false,
    timeRemaining: '2h',
    avgTime: '10m',
    tasksTotal: 66,
    tasksQueue: 66,
}
export default TaskCard;