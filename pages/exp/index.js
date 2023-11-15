import { useState } from 'react';

import MainInfo from '../../components/ExpPage/MainInfo';
import Button from '../../components/Button/Button';
import Companies from '../../components/ExpPage/CompaniesList';
import Description from '@/components/ExpPage/Description';
import Education from '@/components/ExpPage/Education';
import DescrEducation from '@/components/ExpPage/DescrEducation';
import DataForJob from '../../components/ExpPage/data/DataForJob';
import DataForStudy from '../../components/ExpPage/data/DataForStudy';

import classes from './exp.module.scss';

function ExpPage() {
  const { jobInfo, onToggleRise } = DataForJob();
  const { studyInfo, onToggleRiseStudy } = DataForStudy();
  const [activeList, setActiveList] = useState(false);
  const [activeStudyList, setActiveStudyList] = useState(false);

  const onActive = () => {
    setActiveList((activeList) => !activeList);
  };
  const onActiveStudy = () => {
    setActiveStudyList((activeStudyList) => !activeStudyList);
  };

  const skeletonShow = {
    display: activeList ? 'none' : 'block',
  };
  const skeletonShowStudy = {
    display: activeStudyList ? 'none' : 'block',
  };
  return (
    <div>
      <MainInfo />
      <div className={classes.job__section__wrapper}>
        <Companies
          jobInfo={jobInfo}
          onToggleRise={onToggleRise}
          active={activeList}
          onActive={onActive}
        />
        <div className={classes.skeleton} style={skeletonShow}></div>
        <Description jobInfo={jobInfo} active={activeList} />
      </div>

      <div className={classes.study__section__wrapper}>
        <Education
          studyInfo={studyInfo}
          onToggleRiseStudy={onToggleRiseStudy}
          active={activeStudyList}
          onActiveStudy={onActiveStudy}
        />
        <div className={classes.skeleton} style={skeletonShowStudy}></div>
        <DescrEducation studyInfo={studyInfo} active={activeStudyList} />
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
