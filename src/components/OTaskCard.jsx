import React, { Component } from 'react';
import '../styles/OTaskCard.css'

import {
    IncreaseRbIcon,
    DecreaseRbIcon,
    PlayIcon,
    PriorityIcon,
} from '../Icons/AllIcons';

class TaskCard extends Component {

    state = {}
    render() {
        const {
            procName,
            procDescription,
            assigned,
            // priority,
            workers,
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

                </div>
                <div className='task-second-column pink-border'>
                    <div className='play-pause'>
                        <PlayIcon assigned={assigned} />
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
                    <PriorityIcon priority={0} />


                </div>
            </div>
        );
    }
}

export default TaskCard;