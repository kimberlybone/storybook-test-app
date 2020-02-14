import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types'

function TaskList({ loading, tasks, onPinTask, onArchiveTask }){
  const events = {
    onPinTask,
    onArchiveTask
  }
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if( loading ){
    return <div className="list-items">{ LoadingRow }</div>
  }
  if ( tasks.length === 0 ) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">Empty!</div>
          <div className="subtitle-message">You have no tasks so relax</div>
        </div>
      </div>
    );
  }
  return(
    <div className="list-items">
      { tasks.map( task => (
        <Task key={ task.id } task={ task } {...events}/>
      ))}
    </div>
  )
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.PropTypes.task).isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired
}

export default TaskList
