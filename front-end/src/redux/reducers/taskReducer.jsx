/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { readLocalStorage } from '../../helpers/localStorage';

const initialState = {
  tasks: readLocalStorage('tasks') || [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    replaceAll: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { replaceAll } = tasksSlice.actions;

export default tasksSlice.reducer;
