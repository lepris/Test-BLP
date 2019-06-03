import React, { Component } from 'react';
import '../styles/OTaskCard.css'

import {
   
    PlayIcon,
    
  } from '../Icons/AllIcons';

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
                <div className='task-second-column pink-border'>
                <h4 className='workers-assigned'>Workers assigned</h4>
                <div className='play-pause teal-border'>
                        <PlayIcon assigned={assigned}/>
                </div>
                
                
                </div>
            </div>
         );
    }
}
 
export default TaskCard;