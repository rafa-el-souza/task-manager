import { PlusCircleIcon } from '@heroicons/react/solid';
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
      className="mb-10"
    >
      <PlusCircleIcon className="w-20 fill-emerald-500 hover:motion-safe:animate-pulse outline outline-8 outline-blue-500 rounded-full" />
    </button>
  );
}

export default AddTaskButton;
