import { configureStore } from '@reduxjs/toolkit';
import projects from '../components/CoursesPage/projectList/projectSlice';
import filters from '../components/CoursesPage/courseFilters/CourseFilterSlice';

const store = configureStore({
  reducer: { projects, filters },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
