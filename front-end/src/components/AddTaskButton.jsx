import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleAddTask } from '../redux/reducers/taskReducer';

function AddTaskButton() {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(toggleAddTask());
      }}
    >
      AddTaskButton
    </button>
  );
}

export default AddTaskButton;
