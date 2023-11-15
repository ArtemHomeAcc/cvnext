import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../../hook/http.hook';

const initialState = {
  filters: [],
  filtersLoadingStatus: 'idle',
  activeFilter: 'Udemy',
};

export const filtersFetch = createAsyncThunk('filters/filtersFetch', async () => {
  const { request } = useHttp();
  return request('/api/v1/courses');
});

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filtersFetch.pending, (state) => {
        state.filtersLoadingStatus = 'loading';
      })
      .addCase(filtersFetch.fulfilled, (state, action) => {
        state.filtersLoadingStatus = 'idle';
        state.filters = action.payload;
      })
      .addCase(filtersFetch.rejected, (state) => {
        state.filtersLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const { activeFilterChanged } = actions;
