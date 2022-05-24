import { configureStore } from '@reduxjs/toolkit';

import { setLocalStorage } from '../helpers/localStorage';
import tasksReducer from './reducers/taskReducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  const { tasks } = store.getState();
  setLocalStorage('tasks', tasks.tasks);
});

export default store;
