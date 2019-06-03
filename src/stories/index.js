import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Button from '../components/Button';
import ONavBar from '../components/ONavBar';
import OTaskCard from '../components/OTaskCard';

import {
  MenuIcon,
  ToggleIcon,
  RefreshIcon,
  AssignProcessIcon,
  IncreaseRbIcon,
  DecreaseRbIcon,
  PlayIcon,
  StarOffIcon,
  StarOnIcon,
  LookingGlassIcon,
  DropMenuBlIcon,
  DropMenuWhtIcon
} from '../Icons/AllIcons';





storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('All Icons', module)
  .add('menu icon displays ok', () => (
    <>
    <MenuIcon /><br></br>
    <RefreshIcon /><br></br>
    <ToggleIcon /><br></br>
    <AssignProcessIcon /><br></br>
    <IncreaseRbIcon /><br></br>
    <DecreaseRbIcon /><br></br>
    <PlayIcon /><br></br>
    <StarOnIcon /><br></br>
    <StarOffIcon /><br></br>
    <LookingGlassIcon /><br></br>
    <DropMenuBlIcon /><br></br>
    <DropMenuWhtIcon /><br></br>

    </>

  ))


storiesOf('ONavBar',module)
    .add('displys ok', () => <ONavBar/>);

storiesOf('OTaskCard',module)
  .add('displys ok', () => <OTaskCard/>);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hell Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add("active with fill", () => (
    <Button label={`continue`} fill={true} active={true}></Button>
  ))
  .add("active with no fill", () => (
    <Button label={`sign up`} fill={false} active={true} ></Button>
  ))
  .add("disabled", () => <Button label={`continue`} active={false} ></Button>);


