import React from 'react';
import PropTypes from 'prop-types';

function TaskDetailsModal({ task }) {
  const {
    _id, description, createdAt, updatedAt,
  } = task;

  return (
    <>
      <div>{_id}</div>
      <div>{description}</div>
      <div>{createdAt}</div>
      <div>{updatedAt}</div>
    </>
  );
}

TaskDetailsModal.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};

export default TaskDetailsModal;
