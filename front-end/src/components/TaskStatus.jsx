import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BadgeCheckIcon, PauseIcon, PlayIcon } from '@heroicons/react/solid';

import api, { http, URL } from '../helpers/api';
import { reloadList } from '../redux/reducers/taskReducer';
import { unformattedStatuses } from '../helpers/format';

function TaskStatus({ task }) {
  const dispatch = useDispatch();

  const [nextStatus, setNextStatus] = useState('');

  const getNextStatus = () => {
    const currentStatusIndex = unformattedStatuses.indexOf(task.status);

    if (currentStatusIndex + 1 === unformattedStatuses.length) {
      return setNextStatus(unformattedStatuses[0]);
    }

    return setNextStatus(unformattedStatuses[currentStatusIndex + 1]);
  };

  useEffect(() => {
    getNextStatus();
  }, [task.status]);

  const handleUpdate = async () => {
    try {
      const updated = await api.put(URL, { _id: task._id, status: nextStatus });

      if (updated.status === http.OK) dispatch(reloadList());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleUpdate}
      className="bg-neutral-800 rounded-full w-12 mr-4"
    >
      {task.status === 'pronto' && <BadgeCheckIcon className="w-12 fill-cyan-500" />}
      {task.status === 'andamento' && <PlayIcon className="w-12 fill-lime-500" />}
      {task.status === 'pendente' && <PauseIcon className="w-12 fill-amber-400" />}
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
