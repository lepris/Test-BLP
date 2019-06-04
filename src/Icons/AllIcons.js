import React from 'react';

import SvgMenu from './Menu';
import SvgToggle from './Toggle';
import SvgRefresh from './Refresh';
import SvgAssignProcess from './AssignProcess';
import SvgPauseProcess from './PauseProcess';
import SvgIncreaseRb from './IncreaseRb';
import SvgDecreaseRb from './DecreaseRb';
import SvgPlay from './Play';
import SvgStarOff from './StarOff';
import SvgStarOn from './StarOn';
import SvgLookingGlass from './LookingGlass';
import SvgDropMenuWht from './DropMenuWht';
import SvgDropMenuBl from './DropMenuBl';

// import '../styles/AllIcons.css';


export const MenuIcon = () => <SvgMenu />
export const ToggleIcon = () => <SvgToggle />
export const RefreshIcon = () => <SvgRefresh />
export const AssignProcessIcon = () => <SvgAssignProcess />
export const PauseProcessIcon = () => <SvgPauseProcess />

export const IncreaseRbIcon = () => <SvgIncreaseRb />
export const DecreaseRbIcon = () => <SvgDecreaseRb />
export const PlayIcon = () => <SvgPlay />
export const LookingGlassIcon = () => <SvgLookingGlass />
export const DropMenuWhtIcon = () => <SvgDropMenuWht />
export const DropMenuBlIcon = () => <SvgDropMenuBl />
export const StarOnIcon = () => <SvgStarOn />
export const StarOffIcon = () => <SvgStarOff />
export const PriorityIcon = ({ priority }) => {
    return (<div className='priority-icon-wrapper'>
        {(() => {
            switch (priority) {
                default:
                    return <><SvgStarOff /><SvgStarOff /><SvgStarOff /></>
                case 0:
                    return <><SvgStarOff /><SvgStarOff /><SvgStarOff /></>
                case 1:
                    return <><SvgStarOn /><SvgStarOff /><SvgStarOff /></>
                case 2:
                    return <><SvgStarOn /><SvgStarOn /><SvgStarOff /></>
                case 3:
                    return <><SvgStarOn /><SvgStarOn /><SvgStarOn /></>

            }
        })()}
    </div>)
}






