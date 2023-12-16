import { useRouter } from 'next/router';
import classes from '../css/expPage.module.scss';

const AchievmentsProjects = ({ active, projectInfo }) => {
  const router = useRouter();
  const { locale } = router;

  const posAchievements = projectInfo.map((item) => {
    const { rise } = item;
    const languageInformationDisplay = locale === item.uk.language ? item.uk : item.en;

    const workStyle = {
      display: rise && active ? 'block' : 'none',
    };

    const viewAchivments = languageInformationDisplay.achievements.map((item) => (
      <li key={item.id}>{item.achiev}</li>
    ));

    return (
      <div
        key={languageInformationDisplay.id}
        className={classes.job__section__achiev}
        style={workStyle}
      >
        <ul>{viewAchivments}</ul>
      </div>
    );
  });

  return <>{posAchievements}</>;
};

export default AchievmentsProjects;
