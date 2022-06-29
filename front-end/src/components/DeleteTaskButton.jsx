import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MinusCircleIcon } from '@heroicons/react/solid';

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
      <MinusCircleIcon className="w-7 fill-blue-500" />
    </button>
  );
}

DeleteTaskButton.propTypes = {
  _id: PropTypes.string.isRequired,
};

export default DeleteTaskButton;
