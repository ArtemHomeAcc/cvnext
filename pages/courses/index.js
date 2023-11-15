import MainInfo from '@/components/CoursesPage/MainInfo';
import CourseFilters from '@/components/CoursesPage/courseFilters/CourseFilters';
import ProjectList from '@/components/CoursesPage/projectList/ProjectList';
import ProjectDescription from '@/components/CoursesPage/projectDescription/ProjectDescription';
import CourseDescription from '@/components/CoursesPage/courseDescription/CourseDescription';
import Button from '@/components/Button/Button';
import classes from './courses.module.scss';

function Courses() {
  return (
    <div>
      <MainInfo />
      <div className={classes.courses__section__wrapper}>
        <CourseFilters />
        <ProjectList />
        <div className={classes.courses__section__projects_description}>
          <ProjectDescription />
          <CourseDescription />
        </div>
      </div>

      <Button linkto="/exp" tN="PREVIOUS" />
    </div>
  );
}

export default Courses;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
