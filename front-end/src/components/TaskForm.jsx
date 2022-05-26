/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import api, { http, URL } from '../helpers/api';
import { reloadList, toggleAddTask } from '../redux/reducers/taskReducer';
import { nameSchema } from '../helpers/joi';

function TaskForm({ task = false, isUpdating = false, updateDone }) {
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState({
    name: isUpdating ? task.name : '',
    description: isUpdating ? task.description : '',
  });

  const [inputError, setInputError] = useState({
    name: false,
  });

  const [gotInput, setGotInput] = useState({
    name: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      const { error = false, value: validatedValue } = nameSchema.validate(value);

      setInputError({ ...inputError, [name]: error });

      return setNewTask({ ...newTask, [name]: validatedValue });
    }

    return setNewTask({ ...newTask, [name]: value });
  };

  const handleCreate = async () => {
    try {
      const created = await api.post(URL, { ...newTask, status: 'pendente' });

      if (created.status === http.CREATED) {
        dispatch(reloadList());

        dispatch(toggleAddTask());
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updated = await api.put(URL, { ...newTask, _id: task._id });

      if (updated.status === http.OK) {
        dispatch(reloadList());

        updateDone();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const nextInput = () => {
    if (!inputError.name && !gotInput.name) return setGotInput({ name: true });

    if (!inputError.name) return isUpdating ? handleUpdate() : handleCreate();

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      {
        !gotInput.name && (
          <input
            type="text"
            name="name"
            value={newTask.name}
            placeholder={isUpdating ? "Update your task's name" : 'Add a name to your task'}
            onChange={handleChange}
            autoFocus
          />
        )
      }
      {inputError.name && <span>{inputError.name.message}</span>}
      {
            gotInput.name && (
              <input
                type="text"
                name="description"
                value={newTask.description}
                placeholder={isUpdating ? "Update your task's description" : 'Add a description to your task'}
                onChange={handleChange}
                autoFocus
              />
            )
        }
    </form>

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
  task: PropTypes.oneOfType([
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      status: PropTypes.string,
      index: PropTypes.number,
    }),
    PropTypes.bool,
  ]),
};

export default TaskForm;
