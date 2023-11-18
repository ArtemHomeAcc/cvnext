import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import usedApproaches from './usedApproaches';
import classes from './mainPage.module.scss';
import { useRouter } from 'next/router';
import Button from '../Button/Button';

const MainPage = () => {
  const t = useTranslations('MAIN');
  const [index, setIndex] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);
  const router = useRouter();
  const { locale } = router;
  //slider

  useEffect(() => {
    const autoSliderChange = setInterval(() => {
      const lastSlide = index === usedApproaches.length - 1;
      const newIndex = lastSlide ? 0 : index + 1;
      setIndex(newIndex);
    }, 18000);
    return () => clearInterval(autoSliderChange);
  }, [index]);

  const goToPrevious = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? usedApproaches.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = index === usedApproaches.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  function goToSlide(sliderIndex) {
    setIndex(sliderIndex);
  }

  const approachSlider = (sliderIndex) => {
    const data = usedApproaches[sliderIndex];

    return (
      <div className={classes.approach__wrapper}>
        <h1 className={classes.approach__header}>
          {t('THE')} {locale === data.name.uk.language ? data.name.uk.info : data.name.en.info}{' '}
          {t('H1PHRASE')}
        </h1>
        <div
          className={classes.approach__info}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className={classes.approach__info_language}>
            <div>{t('LANGUAGE')}</div>
            <div>{data.language}</div>
          </div>
          <div className={classes.approach__info_library}>
            <div>{t('LIBRARY')}</div>
            <div>{data.library}</div>
          </div>
          <div className={classes.approach__info_approaches}>
            <div>{t('APPROACHES')}</div>
            <div>{data.approaches}</div>
          </div>
          <div className={classes.approach__info_features}>
            <div>{t('MODULES')}</div>
            <div>{data.features}</div>
          </div>
        </div>
      </div>
    );
  };

  const dots = (index) => {
    const displayDots = usedApproaches.map((slide, i) => {
      return (
        <div
          className={`${classes.approach_dots} ${index === i && classes.approach__dots_active}`}
          key={slide.id}
          onClick={() => goToSlide(i)}
        ></div>
      );
    });
    return displayDots;
  };

  const sliderDots = (index) => {
    return <div className={classes.approach__dots}>{dots(index)}</div>;
  };

  //swipe event

  const handleTouchStart = (e) => {
    e.preventDedault();
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const difference = touchDown - currentTouch;

    if (difference > 5) {
      goToNext();
    }

    if (difference < -5) {
      goToPrevious();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <section className={classes.mainBtns}>
        <Button linkto="/exp" tN="PREVIOUS" />
        <Button linkto="/courses" tN="AFTER" />
      </section>
      <section className={classes.approach}>
        {sliderDots(index)}
        {approachSlider(index)}
      </section>
    </>
  );
};

export default MainPage;
