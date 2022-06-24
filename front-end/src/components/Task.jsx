import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TaskDisplay from './TaskDisplay';
import TaskForm from './TaskForm';
import TaskOptions from './TaskOptions';

function Task({ task }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const updateDone = () => {
    setIsUpdating(false);
  };

  return (
    <>
      {!isUpdating && (
        <div
          data-testid={`task-display-name-${task._id}`}
        >
          <TaskDisplay task={task} />
          <TaskOptions _id={task._id} setIsUpdatingCB={setIsUpdating} />
        </div>
      )}
      {isUpdating && <TaskForm task={task} isUpdating updateDone={updateDone} />}
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
