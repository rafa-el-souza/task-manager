import React from 'react';
import PropTypes from 'prop-types';

import DeleteTaskButton from './DeleteTaskButton';
import UpdateTaskButton from './UpdateTaskButton';

function TaskOptions({ _id, setIsUpdating }) {
  return (
    <>
      <UpdateTaskButton setIsUpdating={setIsUpdating} />
      <DeleteTaskButton _id={_id} />
    </>
  );
}

TaskOptions.propTypes = {
  _id: PropTypes.string.isRequired,
  setIsUpdating: PropTypes.func.isRequired,
};

export default TaskOptions;
