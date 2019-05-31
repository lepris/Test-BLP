import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Button from '../components/Button';
import MenuIcon from '../Icons/MenuIcon.js';
import App from '../App';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('MenuIcon', module)
  .add('menu icon displays ok', ()=> (
    <MenuIcon width={'36px'} heighth={'36px'} />
  ))
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

storiesOf('App', module)
  .add('default', () => <App />)
  .add('title', () => <App title={'This beautiful props with title'} />);
