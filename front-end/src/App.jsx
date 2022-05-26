import React from 'react';

import AddTaskButton from './components/AddTaskButton';
import TaskList from './components/TaskList';
import TaskSorter from './components/TaskSorter';

function App() {
  return (
    <div className="App">
      <AddTaskButton />
      <TaskSorter />
      <TaskList />
    </div>
  );
}

export default App;
