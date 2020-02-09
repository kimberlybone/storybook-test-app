import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { addDecorator } from '@storybook/react'
import { load, addParameters } from '@storybook/react';
import defaultNotes from './instructions.md';

export default {
  title: 'Button',
  component: Button,
  decorators: [storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>],
};


export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯💎
    </span>
  </Button>
);
Emoji.story = {
  decorators: [storyFn => <div style={{ border: '5px solid red'}}>{storyFn()}</div>]
}


addDecorator( storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
addParameters({ notes: defaultNotes });
