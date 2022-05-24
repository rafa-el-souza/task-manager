import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { reloadList } from '../redux/reducers/taskReducer';
import api from '../helpers/axios';

function DeleteTaskButton({ _id }) {
  const dispatch = useDispatch();

  const handleDeletion = async () => {
    try {
      const deleted = await api.delete('/task', { data: { _id } });

      if (deleted.status === 200) dispatch(reloadList());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDeletion}
    >
      Delete Task
    </button>
  );
}

DeleteTaskButton.propTypes = {
  _id: PropTypes.string.isRequired,
};

export default DeleteTaskButton;
