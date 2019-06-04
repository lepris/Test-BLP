import React, { Component } from 'react';
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

    state = {}
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
                <div className='task-first-column teal-border'>
                    <label className=' process-name-label label-text text-inner-shadow'>Name</label>
                    <h3 className='process-name '>{procName}</h3>
                    <span>{procDescription}</span>
                    <div className='details-wrapper pink-border'>
                        {assigned
                            ? details
                                ? <div className='details-bar-bar teal-border'>
                                    <ToggleIcon />{`detailed info ${tasksQueue} ${tasksTotal} ${avgTime} ${timeRemaining}`}

                                    <div className='progress-blur' >
                                        <ProgressBar tasksTotal={tasksTotal} tasksQueue={tasksQueue} />
                                    </div>

                                </div>
                                : <div className='details-bar-bar teal-border'><ToggleIcon /> <ProgressBar tasksTotal={tasksTotal} tasksQueue={tasksQueue} /></div>
                            : null
                        }
                    </div>
                </div>


                <div className='task-second-column pink-border'>
                    <div className='play-pause pink-border'>
                        {assigned
                            ? <PauseProcessIcon />
                            : <PlayIcon />
                        }
                    </div>
                    <h4 className='workers-assigned'>Workers assigned</h4>

                    <div className='workers-wrapper pink-border'>
                        <div className='plus-minus teal-border'>
                            <DecreaseRbIcon />
                        </div>
                        <span className='workers-number orange-border'>
                            {workers}/25
                        </span>
                        <div className='plus-minus teal-border'>
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

export default TaskCard;