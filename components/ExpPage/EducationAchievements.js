import { useRouter } from 'next/router';
import classes from './css/expPage.module.scss';

const EducationAchievements = ({ studyInfo, active }) => {
  const router = useRouter();
  const { locale } = router;

  const achievements = studyInfo.map((item) => {
    const { rise } = item;
    let achievements = locale === item.uk.language ? item.uk.achievements : item.en.achievements;

    const workStyle = {
      display: rise && active ? 'block' : 'none',
    };

    const viewAchivments = achievements.map((item) => <li key={item.id}>{item.achieve}</li>);
    return (
      <div className={classes.study__section__achiev} key={item.id} style={workStyle}>
        <ul>{viewAchivments}</ul>
      </div>
    );
  });

  return <>{achievements}</>;
};

export default EducationAchievements;
