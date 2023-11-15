import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useTranslations } from 'next-intl';

import { fetchProjects } from './projectSlice';
import ProjectsListItem from '../projectsListItem/ProjectsListItem';
import Spinner from '../../spinner/Spinner';

import classes from '../css/coursesPage.module.scss';

const ProjectList = () => {
  const t = useTranslations('ABOUT');

  const filteredProjectSelector = createSelector(
    (state) => state.filters.activeFilter,
    (state) => state.projects.projects,
    (filters, projects) => {
      if (filters === 'Udemy') {
        return projects;
      } else {
        return projects.filter((item) => item.course.name === filters);
      }
    }
  );
  const filtredProjects = useSelector(filteredProjectSelector);
  const projectsLoadingStatus = useSelector((state) => state.projects.projectsLoadingStatus);
  const { activeFilter } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());

    // eslint-disable-next-line
  }, []);

  if (projectsLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (projectsLoadingStatus === 'error') {
    return <h5>{t('LOADING_ERROR')}</h5>;
  }

  const renderProjectList = (arr) => {
    return arr.map(({ _id, ...props }) => {
      return <ProjectsListItem key={_id} {...props} />;
    });
  };
  const elements = renderProjectList(filtredProjects);

  return (
    <div className={classes.courses__section__projects}>
      <div
        className={classes.skeleton}
        style={
          activeFilter === 'Udemy' || activeFilter === 'Course On Demand'
            ? { display: 'block' }
            : { display: 'none' }
        }
      >
        <div className={classes.skeleton_item}></div>
        <div className={classes.skeleton_item}></div>
        <div className={classes.skeleton_item}></div>
        <div className={classes.skeleton_item}></div>
      </div>
      {elements}
    </div>
  );
};

export default ProjectList;
