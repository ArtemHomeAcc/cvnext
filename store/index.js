import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import projects from './slice/ProjectSlice';
import filters from './slice/CourseFilterSlice';

export const store = () =>
  configureStore({
    reducer: { projects, filters },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper(store);
