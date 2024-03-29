import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/SetPriorityDropMenu.css';



class SetPriorityDropMenu extends Component {
    state = {
        priorityInd: 0
    }

    componentDidMount() {
        const { priority } = this.props;
        this.setState({
            priorityInd: priority
        })
    }
    handlePriorityChange = (e) => {

        e.preventDefault();
        let value = e.target.value;

        this.setState({ priorityInd: value });
    }
    resetPriority = (e) => {
        e.preventDefault();
        const { priority } = this.props;
        this.setState({
            priorityInd: priority
        })
    }
    setNewPriority = (e) => {
        e.preventDefault();
        const { setTaskPriority, procId, hidePriorityMenu } = this.props;
        let value = e.target.value;
        hidePriorityMenu(e);
        setTaskPriority(value, procId);

    }
    render() {
        let { priorityInd } = this.state;
        const priorityNames = {
            1: 'Low',
            2: 'Medium',
            3: 'High'
        }
        return (


            <div className='priority-drop-menu-wrapper'>
                <div className='heading'>
                    <span className='animated-text'>Set {priorityNames[priorityInd]} Priority</span>
                </div>
                <div className='three-star-buttons'>
                    <button className={priorityInd > 0 ? 'star-button bg-star-active' : 'star-button'} value={1} onClick={this.setNewPriority} onMouseOver={this.handlePriorityChange}>Low</button>
                    <button className={priorityInd > 1 ? 'star-button bg-star-active' : 'star-button'} value={2} onClick={this.setNewPriority} onMouseOver={this.handlePriorityChange}>Medium</button>
                    <button className={priorityInd > 2 ? 'star-button bg-star-active' : 'star-button'} value={3} onClick={this.setNewPriority} onMouseOver={this.handlePriorityChange}>High</button>
                </div>
            </div>
        )
    }
}

SetPriorityDropMenu.propTypes = {
    priority: PropTypes.number
};
SetPriorityDropMenu.defaultProps = {
    priority: 0,
}

export default SetPriorityDropMenu;