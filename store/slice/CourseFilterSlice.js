import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
// import { useHttp } from '../../../hook/http.hook';

const initialState = {
  filters: [],
  activeFilter: 'Udemy',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    fulfilledFilters: (state, action) => {
      state.filters = action.payload;
    },
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.filters = action.payload.filters.filters;
    },
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const { activeFilterChanged, fulfilledFilters } = actions;
