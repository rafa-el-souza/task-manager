import React from 'react';
import PropTypes from 'prop-types';

function UpdateTaskButton({ setIsUpdating }) {
  return (
    <button
      type="button"
      onClick={() => {
        setIsUpdating(true);
      }}
    >
      UpdateTaskButton
    </button>
  );
}

UpdateTaskButton.propTypes = {
  setIsUpdating: PropTypes.func.isRequired,
};

export default UpdateTaskButton;