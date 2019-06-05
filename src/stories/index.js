import React from 'react';

import { storiesOf } from '@storybook/react';


import App from '../App';
import ONavBar from '../components/ONavBar';
import OTaskCard from '../components/OTaskCard';
import ProgressBar from '../components/ProgressBar';
import AssignDropMenu from '../components/AssignDropMenu';
import SetPriorityDropMenu from '../components/SetPriorityDropMenu';

import {
  MenuIcon,
  ToggleIcon,
  RefreshIcon,
  AssignProcessIcon,
  PauseProcessIcon,
  IncreaseRbIcon,
  DecreaseRbIcon,
  PlayIcon,
  StarOffIcon,
  StarOnIcon,
  LookingGlassIcon,
  DropMenuBlIcon,
  DropMenuWhtIcon,
  PriorityIcon
} from '../Icons/AllIcons';

storiesOf('App', module)
  .add('First screen', () => <App
    procName={'Test Process Name'}
    procDescription={'Description of this test process'}
    assigned={false}
    priority={0}
    workers={0}
    timeRemaining={'0'}
    details={false}
    avgTime={'0'}
    tasksTotal={0}
    tasksQueue={0}
  />);

storiesOf('Assign Drop Menu', module)
  .add('Assign drop', () => <AssignDropMenu />);

storiesOf('Set Priority Drop Menu', module)
  .add('No Priority set drop menu', () => <SetPriorityDropMenu />)
  .add('0 Set Priority drop menu', () => <SetPriorityDropMenu priority={0} />)
  .add('1 Set Priority drop menu', () => <SetPriorityDropMenu priority={1} />)
  .add('2 Set Priority drop menu', () => <SetPriorityDropMenu priority={2} />)
  .add('3 Set Priority drop menu', () => <SetPriorityDropMenu priority={3} />);

storiesOf('ONavBar', module)
  .add('displays ok', () => <ONavBar />);

storiesOf('OTaskCard', module)
  .add('not assigned', () => <OTaskCard
    procName={'Test Process Name'}
    procDescription={'Description of this test process'}
    assigned={false}
    priority={0}
    workers={0}
    timeRemaining={'0'}
    details={false}
    avgTime={'0'}
    tasksTotal={0}
    tasksQueue={0}

  />)
  .add('Assigned priority 1', () => <OTaskCard
    procName={'Test Process Name'}
    procDescription={'Description of this test process'}
    assigned={true}
    details={false}
    priority={1}
    workers={10}
    timeRemaining={'01:24'}
    avgTime={'12s'}
    tasksTotal={10}
    tasksQueue={6}

  />)
  .add('Details Assigned priority 1', () => <OTaskCard
    procName={'Test Process Name'}
    procDescription={'Description of this test process'}
    assigned={true}
    details={true}
    priority={1}
    workers={10}
    timeRemaining={'01:24'}
    avgTime={'12s'}
    tasksTotal={10}
    tasksQueue={6}

  />);
storiesOf('Progress Bar', module)
  .add('status 100%', () => <ProgressBar tasksTotal={10} tasksQueue={10} />)
  .add('status 10%', () => <ProgressBar tasksTotal={10} tasksQueue={9} />)
  .add('status 1%', () => <ProgressBar tasksTotal={100} tasksQueue={99} />)
  .add('status 9%', () => <ProgressBar tasksTotal={100} tasksQueue={91} />)
  .add('status 50%', () => <ProgressBar tasksTotal={10} tasksQueue={5} />)


storiesOf('Priority Icon priority of props', module)
  .add('task priority of 0', () => <PriorityIcon priority={0} />)
  .add('task priority of 1', () => <PriorityIcon priority={1} />)
  .add('task priority of 2', () => <PriorityIcon priority={2} />)
  .add('task priority of 3', () => <PriorityIcon priority={3} />)

storiesOf('All Icons', module)
  .add('menu icon displays ok', () => (
    <>
      <MenuIcon /><RefreshIcon /><ToggleIcon /><PlayIcon /><PauseProcessIcon /><br></br>
      <AssignProcessIcon /><br></br>
      <IncreaseRbIcon /><DecreaseRbIcon /><br></br>
      <br></br>
      <StarOnIcon /><StarOffIcon /><br></br>
      <LookingGlassIcon /><br></br>
      <DropMenuBlIcon /> <DropMenuWhtIcon /><br></br>

    </>

  ))




