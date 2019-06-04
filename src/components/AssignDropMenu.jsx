import PropTypes from 'prop-types';
import React from 'react';

const AssignDropMenu = ({ }) => (
    <div className='drop-menu-wrapper'>
        <div className='drop-menu-item prism-border'>
            Auto-assign
        </div>
        <div className='drop-menu-item prism-border'>
            Select workers
        </div>
        <div className='drop-menu-item prism-border'>
            Schedule
        </div>
        <div className='drop-menu-item prism-border'>
            Archive
        </div>
    </div>
);

AssignDropMenu.propTypes = {};

export default AssignDropMenu;