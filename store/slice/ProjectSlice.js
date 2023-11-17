import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  projects: [],
  activeCourse: '',
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    fulfilledProjects: (state, action) => {
      state.projects = action.payload;
    },
    activeProject: (state, action) => {
      state.activeCourse = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.projects = action.payload.projects.projects;
    },
  },
});

const { actions, reducer } = projectsSlice;

export default reducer;
export const { activeProject, fulfilledProjects } = actions;
