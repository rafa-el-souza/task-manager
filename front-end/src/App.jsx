import React from 'react';
import AddTaskButton from './components/AddTaskButton';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <AddTaskButton />
      <TaskList />
    </div>
  );
}

export default App;
