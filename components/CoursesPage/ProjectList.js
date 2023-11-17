import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import ProjectsListItem from './ProjectsListItem';

import classes from './css/coursesPage.module.scss';

const ProjectList = () => {
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
  const filteredPR = useSelector(filteredProjectSelector);
  const { activeFilter } = useSelector((state) => state.filters);

  const renderProjectList = (arr) => {
    return arr.map(({ _id, ...props }) => {
      return <ProjectsListItem key={_id} {...props} />;
    });
  };
  const elements = renderProjectList(filteredPR);

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
