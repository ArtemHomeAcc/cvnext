import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import classes from './css/expPage.module.scss';

const Description = ({ active, jobInfo }) => {
  const t = useTranslations('ABOUT');
  const router = useRouter();
  const { locale } = router;

  const roleDescription = jobInfo.map((item) => {
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
        <div className={classes.descr__track}>{t('EXPERIENCE_DESCRIPTION')}</div>
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

  const roleAchievements = jobInfo.map((item) => {
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
        <div className={classes.achievements__track}>{t('EXPERIENCE_ACHIEVEMENTS')}</div>
        <ul>{viewAchivments}</ul>
      </div>
    );
  });

  return (
    <>
      {roleDescription}
      {roleAchievements}
    </>
  );
};

export default Description;
