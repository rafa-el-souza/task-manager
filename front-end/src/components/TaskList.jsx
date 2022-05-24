import React, { useEffect, useState } from 'react';
import api from '../helpers/axios';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const tasksFromApi = await api.get('task');
      setTasks(tasksFromApi);
    };
    fetchData();
  }, []);
  return (
    <div>
      {tasks.map((task, index) => (
        <Task task={{ ...task, index }} />
      ))}
    </div>
  );
}

export default TaskList;
