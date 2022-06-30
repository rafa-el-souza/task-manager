import React from 'react';
import PropTypes from 'prop-types';

function TaskDetailsPopover({ task }) {
  const {
    description, createdAt,
  } = task;

  return (
    <div
      className="absolute text-sm font-thin right-1/4"
    >
      <div>{description}</div>
      <div>{createdAt}</div>
    </div>
  );
}

TaskDetailsPopover.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default TaskDetailsPopover;
