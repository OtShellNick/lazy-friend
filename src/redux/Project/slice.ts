import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, TInitialState } from '@redux/Project/state';

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectName(state: TInitialState, action: PayloadAction<string>) {
      state.project.name = action.payload;
    },
    setProjectDescription(state, action: PayloadAction<string>) {
      state.project.description = action.payload;
    },
  },
});

export const projectReducer = projectSlice.reducer;
export const { setProjectName, setProjectDescription } = projectSlice.actions;
