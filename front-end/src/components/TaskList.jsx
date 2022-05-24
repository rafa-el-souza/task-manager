import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../helpers/axios';
import Task from './Task';
import { replaceAll } from '../redux/reducers/taskReducer';
import TaskForm from './TaskForm';

function TaskList() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);

  const addTask = useSelector((state) => state.tasks.addTask);

  const reloadList = useSelector((state) => state.tasks.reloadList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetched = await api.get('/task');

        if (fetched.status === 200) dispatch(replaceAll(fetched.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [reloadList]);

  return (
    <div>
      {addTask && <TaskForm /> }
      {tasks.map((task, index) => (
        <Task task={{ ...task, index }} />
      ))}
    </div>
  );
}

export default TaskList;
