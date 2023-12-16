import { useState } from 'react';
import { useTranslations } from 'next-intl';

import MainInfo from '../../components/ExpPage/MainInfo';
import Button from '../../components/Button/Button';
import ProjectList from '../../components/ExpPage/Projects/Projects';
import Companies from '../../components/ExpPage/CompaniesList';
import Description from '@/components/ExpPage/Description';
import Achievments from '@/components/ExpPage/Achievments';
import DescriptionProjects from '@/components/ExpPage/Projects/DescrProjects';
import Education from '@/components/ExpPage/Education';
import DescrEducation from '@/components/ExpPage/DescrEducation';
import EducationAchievements from '@/components/ExpPage/EducationAchievements';
import DataForProjects from '@/components/ExpPage/data/DataForProjects';
import DataForJob from '../../components/ExpPage/data/DataForJob';
import DataForStudy from '../../components/ExpPage/data/DataForStudy';

import classes from './exp.module.scss';
import AchievmentsProjects from '@/components/ExpPage/Projects/AchievmentsProjects';

function ExpPage() {
  const t = useTranslations('ABOUT');

  const { projectInfo, onToggleProjectRise } = DataForProjects();
  const { jobInfo, onToggleRise } = DataForJob();
  const { studyInfo, onToggleRiseStudy } = DataForStudy();
  const [activeProjectList, setActiveProjectList] = useState(false);
  const [activeList, setActiveList] = useState(false);
  const [activeStudyList, setActiveStudyList] = useState(false);

  const onActive = () => {
    setActiveList((activeList) => !activeList);
  };
  const onActiveProject = () => {
    setActiveProjectList((activeProjectList) => !activeProjectList);
  };
  const onActiveStudy = () => {
    setActiveStudyList((activeStudyList) => !activeStudyList);
  };

  const skeletonShow = {
    display: activeList ? 'none' : 'block',
  };
  const skeletonShowProject = {
    display: activeProjectList ? 'none' : 'block',
  };
  const skeletonShowStudy = {
    display: activeStudyList ? 'none' : 'block',
  };
  return (
    <div>
      <MainInfo />
      <div className={classes.job__section__wrapper}>
        <div className={classes.experience}>
          <div className={classes.experience__track}>{t('EXPERIENCE_HEADER')}</div>
          <ProjectList
            projectInfo={projectInfo}
            onToggleProjectRise={onToggleProjectRise}
            active={activeProjectList}
            onActive={onActiveProject}
          />
        </div>
        <div className={classes.description}>
          <div className={classes.description__position}>
            <div className={classes.description__track}>{t('EXPERIENCE_DESCRIPTION')}</div>
            <div className={classes.skeleton} style={skeletonShowProject}></div>
            <DescriptionProjects projectInfo={projectInfo} active={activeProjectList} />
          </div>
          <div className={classes.description__achievements}>
            <div className={classes.description__achievements__track}>
              {t('EXPERIENCE_ACHIEVEMENTS')}
            </div>
            <div className={classes.skeleton} style={skeletonShowProject}></div>
            <AchievmentsProjects projectInfo={projectInfo} active={activeProjectList} />
          </div>
        </div>
      </div>

      <div className={classes.job__section__wrapper}>
        <div className={classes.experience}>
          <Companies
            jobInfo={jobInfo}
            onToggleRise={onToggleRise}
            active={activeList}
            onActive={onActive}
          />
        </div>
        <div className={`${classes.description} ${classes.study}`}>
          <div className={classes.description__position}>
            <div className={`${classes.study__skeleton}`} style={skeletonShow}></div>
            <Description jobInfo={jobInfo} active={activeList} />
          </div>
          <div className={classes.description__achievements}>
            <div className={`${classes.study__skeleton}`} style={skeletonShow}></div>
            <Achievments jobInfo={jobInfo} active={activeList} />
          </div>
        </div>
      </div>

      <div className={classes.study__section__wrapper}>
        <div className={classes.experience}>
          <Education
            studyInfo={studyInfo}
            onToggleRiseStudy={onToggleRiseStudy}
            active={activeStudyList}
            onActiveStudy={onActiveStudy}
          />
        </div>
        <div className={`${classes.description} ${classes.study}`}>
          <div className={classes.description__position}>
            <div className={classes.education__achievements__track}>
              {t('EXPERIENCE_DESCRIPTION')}
            </div>

            <div className={`${classes.study__skeleton}`} style={skeletonShowStudy}></div>
            <DescrEducation studyInfo={studyInfo} active={activeStudyList} />
          </div>
          <div className={classes.description__achievements}>
            <div className={classes.education__achievements__track}>
              {t('EXPERIENCE_ACHIEVEMENTS')}
            </div>
            <div className={`${classes.study__skeleton}`} style={skeletonShowStudy}></div>
            <EducationAchievements studyInfo={studyInfo} active={activeStudyList} />
          </div>
        </div>
      </div>

      <Button linkto="/courses" tN="AFTER" />
    </div>
  );
}

export default ExpPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
