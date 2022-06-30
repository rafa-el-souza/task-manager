import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import api, { http, URL } from '../helpers/api';
import { getTasks } from '../redux/reducers/taskReducer';

import Task from './Task';
import TaskForm from './TaskForm';

function TaskList() {
  const dispatch = useDispatch();

  const tasksStore = useSelector((state) => state.tasks);

  const {
    tasks, addTask, sortBy, ascendingOrder, reloadList,
  } = tasksStore;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetched = await api.get(URL);

        if (fetched.status === http.OK) dispatch(getTasks(fetched.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [reloadList, sortBy, ascendingOrder]);

  return (
    <div
      className="mb-20 flex flex-col w-full"
    >
      <CSSTransition
        in={addTask}
        timeout={{
          enter: 500,
          exit: 500,
        }}
        classNames="fade"
        unmountOnExit
      >
        <div
          className="flex justify-center items-center w-full"
        >
          <TaskForm />
        </div>
      </CSSTransition>
      <TransitionGroup>
        {tasks.map((task) => (
          <CSSTransition
            key={task._id}
            in
            timeout={{
              enter: 500,
              exit: 500,
            }}
            classNames="fade"
            unmountOnExit
          >
            <Task
              task={{ ...task }}
              key={task._id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>

    </div>
  );
}

export default TaskList;
