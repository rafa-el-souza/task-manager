import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TaskStatus from './TaskStatus';
import TaskDetailsModal from './TaskDetailsModal';

// index?
// <div>{task.index}</div>
// id?
// <div>{task._id}</div>
// description, createdAt, updatedAt on hover
// <div>{task.description}</div>
// <div>{task.createdAt}</div>
// <div>{task.updatedAt}</div>
// change task status on click

function TaskDisplay({ task }) {
  const {
    _id, name, description, createdAt, updatedAt, status,
  } = task;

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        TaskDisplay
        {' '}
        {name}
      </div>
      {showDetails && (
        <TaskDetailsModal task={{
          _id, description, createdAt, updatedAt,
        }}
        />
      )}
      <TaskStatus task={{ _id, status }} />
    </>
  );
}

TaskDisplay.propTypes = {
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

export default TaskDisplay;
