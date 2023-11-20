import { useTranslations } from 'next-intl';

import { wrapper } from '@/store';
import mongoConnect from '@/services/mongo';
import { getAllCourses } from '@/models/courses.model';
import { getAllProjects } from '@/models/project.model';

import MainInfo from '@/components/CoursesPage/MainInfo';
import CourseFilters from '@/components/CoursesPage/CourseFilters';
import ProjectList from '@/components/CoursesPage/ProjectList';
import ProjectDescription from '@/components/CoursesPage/ProjectDescription';
import CourseDescription from '@/components/CoursesPage/CourseDescription';
import Button from '@/components/Button/Button';
import { fulfilledProjects } from '../../store/slice/ProjectSlice';
import { fulfilledFilters } from '@/store/slice/CourseFilterSlice';
import classes from './courses.module.scss';

function Courses() {
  const t = useTranslations('ABOUT');

  return (
    <div>
      <MainInfo />
      <div className={classes.courses__wrapper}>
        <div className={classes.courses__list}>
          <div className={classes.courses__list__track}>{t('COURSES')} </div>
          <CourseFilters />
        </div>
        <div className={classes.courses__projects_wrapper}>
          <div className={classes.courses__projects_wrapper__track}>{t('PORTFOLIO')}</div>
          <ProjectList />
        </div>
        <div className={classes.courses__projects_description}>
          <div className={classes.courses__projects_description__track}>
            {t('COURSE_DESCR')}
          </div>
          <ProjectDescription />
          <CourseDescription />
        </div>
      </div>

      <Button linkto="/exp" tN="PREVIOUS" />
    </div>
  );
}

export default Courses;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  await mongoConnect();
  const coursesRes = await getAllCourses(ctx.req, ctx.res);

  const projectRes = await getAllProjects(ctx.req, ctx.res);
  const projectData = JSON.parse(JSON.stringify(projectRes));
  const coursesData = JSON.parse(JSON.stringify(coursesRes));

  store.dispatch(fulfilledProjects(projectData));
  store.dispatch(fulfilledFilters(coursesData));

  return {
    props: {
      messages: (await import(`../../messages/${ctx.locale}.json`)).default,
    },
  };
});
