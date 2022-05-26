import React from 'react';
import PropTypes from 'prop-types';

import DeleteTaskButton from './DeleteTaskButton';
import UpdateTaskButton from './UpdateTaskButton';

function TaskOptions({ _id, setIsUpdatingCB }) {
  return (
    <>
      <UpdateTaskButton setIsUpdatingCB={setIsUpdatingCB} />
      <DeleteTaskButton _id={_id} />
    </>
  );
}

TaskOptions.propTypes = {
  _id: PropTypes.string.isRequired,
  setIsUpdatingCB: PropTypes.func.isRequired,
};

export default TaskOptions;
