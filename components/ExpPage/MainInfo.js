import { useTranslations } from 'next-intl';
import oldAva from './img/baby.jpg';
import classes from './css/expPage.module.scss';
import Image from 'next/image';

const MainInfo = () => {
  const t = useTranslations('ABOUT');
  return (
    <>
      <div className={classes.main__info__wrapper}>
        <div className={classes.main__info__ava}>
          <Image className={classes.main__info__ava_img} src={oldAva} alt="oldMe" />
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
          {t('INTERESTS')}
        </div>
      </div>
    </>
  );
};

export default MainInfo;
