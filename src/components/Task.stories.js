import Task from './Task';
import React from 'react';
import { action } from '@storybook/addon-actions';
// import { addDecorator } from '@storybook/react'

export default {
  component: Task,
  title: 'Task',
  // The exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  decorators: [storyFn => <div style={{backgroundColor: 'violet', padding: '2.0em', borderRadius: '20px'}}>{storyFn()}</div>]
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2020, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Default = () => {
  return <Task task={{ ...taskData }} {...actionsData} />;
};
Default.story = {
  decorators: [storyFn => <div style={{borderRadius: '20px'}}>{storyFn()}</div>]
}

export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;

export const Archived = () => (
  <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);
