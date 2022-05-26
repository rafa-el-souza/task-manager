import React from 'react';
import PropTypes from 'prop-types';

function UpdateTaskButton({ setIsUpdatingCB }) {
  return (
    <button
      type="button"
      onClick={() => {
        setIsUpdatingCB(true);
      }}
    >
      ♻️
    </button>
  );
}

UpdateTaskButton.propTypes = {
  setIsUpdatingCB: PropTypes.func.isRequired,
};

export default UpdateTaskButton;
