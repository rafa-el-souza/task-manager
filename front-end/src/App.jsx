/* eslint-disable max-len */
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import AddTaskButton from './components/AddTaskButton';
import TaskList from './components/TaskList';
import TaskSorter from './components/TaskSorter';

import './styles/animations.css';

function App() {
  const [visible] = useState(true);

  return (
    <div
      className="bg-slate-900 h-screen flex flex-col justify-center items-center w-full"
    >
      <CSSTransition
        in={visible}
        appear
        timeout={{
          appear: 1000,
        }}
        classNames="fade"
      >
        <div className="flex flex-col justify-center items-center h-max absolute top-16 bg-slate-900 w-full">
          <TaskSorter />
          <AddTaskButton />
          <TaskList />
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
