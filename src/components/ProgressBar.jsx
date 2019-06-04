import PropTypes from 'prop-types';
import '../styles/ProgressBar.css';
import React from 'react';



const ProgressBar = ({ tasksTotal, tasksQueue }) => {
    let width = (((tasksTotal - tasksQueue) > 0 ? (tasksTotal - tasksQueue) : tasksTotal) / tasksTotal * 100);
    return (
        <div className='hundred-bg'>
            <div style={{ "width": width.toString() + '%' }} className='current-progress'>
                <span className='percentage-span'>{width >= 10 ? width + '%' : null}</span>
            </div>
            {width < 10 ? <span className='outer' >{width + '%'}</span> : null}
        </div>
    )
}

ProgressBar.propTypes = {
    tasksTotal: PropTypes.number,
    tasksQueue: PropTypes.number
};

export default ProgressBar;