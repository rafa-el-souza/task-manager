import React from 'react';
import PropTypes from 'prop-types';
import { PencilAltIcon } from '@heroicons/react/solid';

function UpdateTaskButton({ setIsUpdatingCB }) {
  return (
    <button
      type="button"
      onClick={() => {
        setIsUpdatingCB(true);
      }}
    >
      <PencilAltIcon className="w-7 fill-blue-500" />
    </button>
  );
}

UpdateTaskButton.propTypes = {
  setIsUpdatingCB: PropTypes.func.isRequired,
};

export default UpdateTaskButton;
