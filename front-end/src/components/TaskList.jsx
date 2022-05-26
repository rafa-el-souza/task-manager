import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api, { http, URL } from '../helpers/api';
import Task from './Task';
import { getTasks } from '../redux/reducers/taskReducer';
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
    <div>
      {addTask && <TaskForm /> }
      {tasks.map((task) => (
        <Task
          task={{ ...task }}
          key={task._id}
        />
      ))}
    </div>
  );
}

export default TaskList;
