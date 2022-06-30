import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';
import TaskStatus from './TaskStatus';
import TaskDetails from './TaskDetails';
import TaskForm from './TaskForm';
import TaskOptions from './TaskOptions';

function Task({ task }) {
  const {
    _id, name, description, createdAt, updatedAt, status,
  } = task;

  const [isUpdating, setIsUpdating] = useState(false);

  const updateDone = () => {
    setIsUpdating(false);
  };

  return (
    <div
      className="h-20 text-slate-200"
    >
      <CSSTransition
        in={!isUpdating}
        timeout={{
          enter: 500,
          exit: 500,
        }}
        classNames="fade"
        unmountOnExit
      >
        <div
          className="flex justify-center items-center w-screen"
        >
          <TaskStatus task={{ _id, status }} />
          <span
            className={(status === 'pronto' && 'text-3xl w-1/2 font-bold line-through opacity-20')
                || (status === 'andamento' && 'w-1/2 text-3xl font-bold underline')
                || 'text-3xl font-bold w-1/2'}
          >
            {name}
          </span>
          <TaskDetails task={{
            _id, description, createdAt, updatedAt,
          }}
          />
          <TaskOptions _id={task._id} setIsUpdatingCB={setIsUpdating} />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isUpdating}
        timeout={{
          enter: 500,
          exit: 500,
        }}
        classNames="fade"
        unmountOnExit
      >
        <div
          className="flex w-screen justify-center items-center"
        >
          <TaskForm task={task} isUpdating updateDone={updateDone} />
        </div>
      </CSSTransition>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    status: PropTypes.string,
    index: PropTypes.number,
  }).isRequired,
};

export default Task;
