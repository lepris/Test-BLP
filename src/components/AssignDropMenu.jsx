
import React from 'react';
import '../styles/AssignDropMenu.css'
const AssignDropMenu = ({ hideAssignMenu }) => (

    <div className='drop-menu-wrapper '>

        <div className='drop-menu-item first'>
            Auto-assign
        </div>
        <div className='drop-menu-item clickable border-left-right' onClick={(e) => hideAssignMenu(e)}>
            Select workers
        </div>
        <div className='drop-menu-item clickable border-left-right'>
            Schedule
        </div>
        <div className='drop-menu-item clickable last'>
            Archive
        </div>
    </div>

);



export default AssignDropMenu;