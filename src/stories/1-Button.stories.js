import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { addDecorator } from '@storybook/react'
import { storiesOf } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  decorators: [storyFn => <div style={{ backgroundColor: 'pink' }}>{storyFn()}</div>],
};

storiesOf('Button', module)
  .add('default - medium', () => {
    <Button size={ ButtonSize.MEDIUM } onClick={action('I was clicked')}>Read more!</Button>
  })

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('Cha-ching!')}>
    <span role="img" aria-label="so cool">
      💎💎💎
    </span>
  </Button>
);
Emoji.story = {
  decorators: [storyFn => <div style={{ border: '5px solid purple'}}>{storyFn()}</div>]
}


addDecorator( storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div> )
