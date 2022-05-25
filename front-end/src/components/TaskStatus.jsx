import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import api from '../helpers/axios';
import { reloadList } from '../redux/reducers/taskReducer';

function TaskStatus({ task }) {
  const statusArray = ['pendente', 'andamento', 'pronto'];

  const dispatch = useDispatch();

  const [nextStatus, setNextStatus] = useState('');

  const getNextStatus = () => {
    const currentStatusIndex = statusArray.indexOf(task.status);

    if (currentStatusIndex + 1 === statusArray.length) {
      return setNextStatus(statusArray[0]);
    }

    return setNextStatus(statusArray[currentStatusIndex + 1]);
  };

  useEffect(() => {
    getNextStatus();
  }, [task.status]);

  const handleUpdate = async () => {
    try {
      const updated = await api.put('/task', { _id: task._id, status: nextStatus });

      if (updated.status === 200) dispatch(reloadList());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleUpdate}
    >
      TaskStatus
      {' '}
      {task.status}
    </button>
  );
}

TaskStatus.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default TaskStatus;
