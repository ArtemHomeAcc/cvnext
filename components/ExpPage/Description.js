import { useRouter } from 'next/router';
import classes from './css/expPage.module.scss';

const Description = ({ active, jobInfo }) => {
  const router = useRouter();
  const { locale } = router;

  const posDescription = jobInfo.map((item) => {
    const { id, rise } = item;

    const languageInformationDisplay = locale === item.uk.language ? item.uk : item.en;

    const { terms, time, place, webToShow, web, profile, descr, position } =
      languageInformationDisplay;

    const workStyle = {
      display: rise && active ? 'block' : 'none',
    };

    const viewDuties = languageInformationDisplay.duties.map((item) => (
      <li key={item.id}>{item.dutie}</li>
    ));
    return (
      <div className={classes.job__section__possition_descr} key={id} style={workStyle}>
        <h2>
          {terms}
          <br />
          {time}
        </h2>
        <span className={classes.grey}>
          {place}, <a href={web}>{webToShow}</a>
        </span>
        <div className={classes.compInfo}>
          {profile}
          <br />
          <ul className={classes.ulList}>
            <li>- {descr}</li>
          </ul>
        </div>
        <h2>{position}</h2>
        <span>
          <ul className={classes.ulList}>{viewDuties}</ul>
        </span>
      </div>
    );
  });

  return <>{posDescription}</>;
};

export default Description;
