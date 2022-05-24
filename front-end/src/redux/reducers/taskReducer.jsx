/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { readLocalStorage } from '../../helpers/localStorage';

const initialState = {
  tasks: readLocalStorage('tasks') || [],
  addTask: false,
  reloadList: false,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    replaceAll: (state, action) => {
      state.tasks = action.payload;
    },
    toggleAddTask: (state) => {
      state.addTask = !state.addTask;
    },
    reloadList: (state) => {
      state.reloadList = !state.reloadList;
    },
  },
});

export const {
  replaceAll, toggleAddTask, reloadList,
} = tasksSlice.actions;

export default tasksSlice.reducer;
