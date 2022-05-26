import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { reloadList } from '../redux/reducers/taskReducer';
import api, { http, URL } from '../helpers/api';

function DeleteTaskButton({ _id }) {
  const dispatch = useDispatch();

  const handleDeletion = async () => {
    try {
      const deleted = await api.delete(URL, { data: { _id } });

      if (deleted.status === http.OK) dispatch(reloadList());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDeletion}
    >
      🗑️
    </button>
  );
}

DeleteTaskButton.propTypes = {
  _id: PropTypes.string.isRequired,
};

export default DeleteTaskButton;
