import { useRouter } from 'next/router';
import classes from './css/expPage.module.scss';

const DescrEducation = ({ studyInfo, active }) => {
  const router = useRouter();
  const { locale } = router;

  const details = studyInfo.map((item) => {
    const { id, rise } = item;
    const correctLanguageData = locale === item.uk.language ? item.uk : item.en;
    const { name, graduated, place, descr } = correctLanguageData;

    const workStyle = {
      display: rise && active ? 'block' : 'none',
    };

    return (
      <div className={classes.study__section__descr} key={id} style={workStyle}>
        <h2>
          {name} <br />
          {graduated}
        </h2>
        <span className={classes.grey}>{place}</span>
        <div className={classes.compInfo}>{descr}</div>
      </div>
    );
  });

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

  return (
    <>
      {details}
      {achievements}
    </>
  );
};

export default DescrEducation;
