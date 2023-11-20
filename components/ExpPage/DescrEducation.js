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

  return (
    <>
      {details}
    </>
  );
};

export default DescrEducation;
