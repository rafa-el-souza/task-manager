import React from 'react';
import PropTypes from 'prop-types';
import TaskOptions from './TaskOptions';

function Task({ task }) {
  return (
    <>
      <div>{task.index}</div>
      <div>{task._id}</div>
      <div>{task.name}</div>
      <div>{task.description}</div>
      <div>{task.createdAt}</div>
      <div>{task.updatedAt}</div>
      <div>{task.status}</div>
      <TaskOptions />
    </>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    status: PropTypes.string,
    index: PropTypes.number,
  }).isRequired,
};

export default Task;
