import { Fragment } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import newAva from './img/photoAfter_final.jpg';
import classes from './css/coursesPage.module.scss';

const MainInfo = () => {
  const t = useTranslations('ABOUT');
  return (
    <Fragment>
      <div className={classes.main__info__wrapper}>
        <div className={classes.main__info__ava}>
          <Image
            className={classes.main__info__ava_img2}
            src={newAva}
            alt="newMe"
          />
        </div>
        <div className={classes.main__info__descr}>
          {t('NAME')} <br />
          {t('SEX')}, {t('AGE')}, {t('DATE_OF_BIRTH')}, {t('MARRIED')} <br />
          <br />
          +380503899090 <span className={classes.grey}>({t('CALL')})</span>
          <br />
          artemzakharchuk@gmail.com <br />
          <br />
          {t('RESIDENCE')} <br />
          {t('CITIZENSHIP')} <br />
          <br />
          {t('COVER')}
        </div>
      </div>
      <div className={classes.main__info__headers__wrapper}>
        <div className={classes.expirience__track}>{t('COURSES')} </div>
        <div className={classes.portfolio__track}>{t('PORTFOLIO')}</div>
        <div className={classes.achievements__track}>{t('COURSE_DESCR')}</div>
      </div>
    </Fragment>
  );
};

export default MainInfo;
