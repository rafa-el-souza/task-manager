/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { formatTaskForDisplay, formatTaskForSorting, sortTasks } from '../../helpers/format';
import { readLocalStorage } from '../../helpers/localStorage';

const initialState = {
  tasks: readLocalStorage('tasks') || [],
  addTask: false,
  reloadList: false,
  sortBy: 'createdAt',
  ascendingOrder: false,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasks: (state, action) => {
      const formattedForSorting = action.payload.map(formatTaskForSorting);

      const sorted = sortTasks(formattedForSorting, state.sortBy, state.ascendingOrder);

      const formattedForDisplay = sorted.map(formatTaskForDisplay);

      state.tasks = formattedForDisplay;
    },

    toggleAddTask: (state) => {
      state.addTask = !state.addTask;
    },

    reloadList: (state) => {
      state.reloadList = !state.reloadList;
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },

    setAscendingOrder: (state, action) => {
      state.ascendingOrder = action.payload;
    },
  },
});

export const {
  getTasks, toggleAddTask, reloadList, setSortBy, setAscendingOrder,
} = tasksSlice.actions;

export default tasksSlice.reducer;
