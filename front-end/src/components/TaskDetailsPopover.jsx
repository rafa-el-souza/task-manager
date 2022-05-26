import React from 'react';
import PropTypes from 'prop-types';

function TaskDetailsPopover({ task }) {
  const {
    description, createdAt,
  } = task;

  return (
    <>
      <div>{description}</div>
      <div>{createdAt}</div>
    </>
  );
}

TaskDetailsPopover.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default TaskDetailsPopover;
