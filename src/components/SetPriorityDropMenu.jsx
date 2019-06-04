import PropTypes from 'prop-types';
import React from 'react';
import '../styles/SetPriorityDropMenu.css';


const SetPriorityDropMenu = ({ }) => (
    <div className='priority-drop-menu-wrapper'>
        <div className='heading'>
            Set Priority
        </div>
        <div className='three-star-buttons '>
            <div className='star-button'></div>
            <div className='star-button'></div>
            <div className='star-button'></div>
        </div>
    </div>
);

SetPriorityDropMenu.propTypes = {};

export default SetPriorityDropMenu;