import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../../hook/http.hook';

const initialState = {
  projects: [],
  projectsLoadingStatus: 'idle',
  activeCourse: '',
};

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const { request } = useHttp();
  return request('/api/v1/projects');
  // return request('https://cv-back-362t.onrender.com/v1/projects');
  // return request("https://jagged-elated-penguin.glitch.me/portfolio");
  // return await request("http://localhost:8000/v1/projects");
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    activeProject: (state, action) => {
      state.activeCourse = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.projectsLoadingStatus = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projectsLoadingStatus = 'idle';
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state) => {
        state.projectsLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = projectsSlice;

export default reducer;
export const { activeProject } = actions;
