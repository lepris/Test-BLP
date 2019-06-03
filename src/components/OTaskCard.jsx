import React, { Component } from 'react';
import '../styles/OTaskCard.css'
class TaskCard extends Component {
    
    state = {  }
    render() { 
        const {
            procName,
            procDescription,
            assigned,
            priority,
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
                <div className='task-second-column'>
                </div>
            </div>
         );
    }
}
 
export default TaskCard;