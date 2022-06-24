import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleAddTask } from '../redux/reducers/taskReducer';

function AddTaskButton() {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      data-testid="add-task-button"
      onClick={() => {
        dispatch(toggleAddTask());
      }}
    >
      📌
    </button>
  );
}

export default AddTaskButton;
