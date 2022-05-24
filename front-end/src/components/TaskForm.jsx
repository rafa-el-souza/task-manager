import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import api from '../helpers/axios';
import { reloadList } from '../redux/reducers/taskReducer';

function TaskForm({ task = false, isUpdating = false, updateDone }) {
  const dispatch = useDispatch();

  const [newTask, setTask] = useState({
    name: isUpdating ? task.name : '',
    description: isUpdating ? task.description : '',
    status: isUpdating ? task.status : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({ ...newTask, [name]: value });
  };

  const handleCreate = async () => {
    try {
      const createdTask = await api.post('/task', { data: { ...newTask } });

      if (createdTask.status === 200) dispatch(reloadList());
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updated = await api.post('/task', { ...newTask, _id: task._id });

      if (updated.status === 200) {
        dispatch(reloadList());

        updateDone();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => (isUpdating ? handleUpdate() : handleCreate());

  return (
    <>
      <div>
        TaskForm
        {isUpdating ? ' Update' : ' Add'}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.name}
          placeholder={task.name}
          onChange={handleChange}
          onKeyUp={(e) => e.key === 'Enter' && handleSubmit(e)}
        />
        <input type="submit" value="Enviar" />
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
