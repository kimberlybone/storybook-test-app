import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { addDecorator } from '@storybook/react'
// import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Button',
  component: Button,
  decorators: [storyFn => <div style={{ backgroundColor: 'pink' }}>{storyFn()}</div>],
};

const StyledButton = styled.button`
  font-size: 1.5em;
  color: palevioletred;
  margin: 1em;
  border: 4px solid papayawhip;
  border-radius: 4px;
  padding: 0.25em 1em;
`

export const Text = () => <StyledButton onClick={action('Hellooooooo')}>Hello Button</StyledButton>;

export const Emoji = () => (
  <StyledButton onClick={action('Cha-ching!')}>
    <span role="img" aria-label="so cool">
      💎 💸 💎
    </span>
  </StyledButton>
);
Emoji.story = {
  decorators: [storyFn => <div style={{ border: '5px solid purple' }}>{storyFn()}</div>]
}


addDecorator( storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div> )
