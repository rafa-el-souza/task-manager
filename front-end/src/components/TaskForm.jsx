import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import api from '../helpers/axios';
import { reloadList, toggleAddTask } from '../redux/reducers/taskReducer';

function TaskForm({ task = false, isUpdating = false, updateDone }) {
  const dispatch = useDispatch();

  const [newTask, setTask] = useState({
    name: isUpdating ? task.name : '',
    description: isUpdating ? task.description : '',
  });

  const [gotInput, setGotInput] = useState({
    name: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({ ...newTask, [name]: value });
  };

  const handleCreate = async () => {
    try {
      const created = await api.post('/task', { ...newTask, status: 'pendente' });

      if (created.status === 201) {
        dispatch(reloadList());

        dispatch(toggleAddTask());
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updated = await api.put('/task', { ...newTask, _id: task._id });

      if (updated.status === 200) {
        dispatch(reloadList());

        updateDone();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const nextInput = () => {
    if (!gotInput.name) return setGotInput({ name: true });

    return isUpdating ? handleUpdate() : handleCreate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextInput();
  };

  return (
    <>
      <div>
        TaskForm
        {isUpdating ? ' Update' : ' Add'}
      </div>
      <form onSubmit={handleSubmit}>
        {
          !gotInput.name && (
            <input
              type="text"
              name="name"
              value={newTask.name}
              placeholder={isUpdating ? "Update your task's name" : 'Add a name to your task'}
              onChange={handleChange}
            />
          )
        }
        {
            gotInput.name && (
            <input
              type="text"
              name="description"
              value={newTask.description}
              placeholder={isUpdating ? "Update your task's description" : 'Add a description to your task'}
              onChange={handleChange}
            />
            )
        }
      </form>
    </>

  );
}

TaskForm.defaultProps = {
  isUpdating: false,
  updateDone: () => {},
  task: false,
};

TaskForm.propTypes = {
  updateDone: PropTypes.func,
  isUpdating: PropTypes.bool,
  task: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    status: PropTypes.string,
    index: PropTypes.number,
  }),
};

export default TaskForm;
