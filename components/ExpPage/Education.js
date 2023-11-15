import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import classes from './css/expPage.module.scss';

const Education = ({ studyInfo, onToggleRiseStudy, active, onActiveStudy }) => {
  const t = useTranslations('ABOUT');
  const router = useRouter();
  const { locale } = router;
  const elements = studyInfo.map((item) => {
    const { id, rise } = item;
    return (
      <div className={classes.accordion_block} key={id}>
        <p
          className={`${classes.accordion_block__item} ${rise && classes.active_style}`}
          type="button"
          tabIndex={0}
          onClick={() => {
            onToggleRiseStudy(id);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onToggleRiseStudy(id);
            }
          }}
        >
          <span>{locale === item.uk.language ? item.uk.education : item.en.education}</span>
        </p>
      </div>
    );
  });

  return (
    <div className={classes.study__section__titles}>
      <div className={`${classes.accordion_heading} ${active && classes.active_style}`}>
        <span
          onClick={onActiveStudy}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onActiveStudy();
            }
          }}
        >
          {t('EDUCATION')}
        </span>
      </div>
      <div
        className={`${
          active ? classes.accordion_block_content__active : classes.accordion_block_content
        }`}
        style={active ? { maxHeight: '80px' } : { maxHeight: '0' }}
      >
        {elements}
      </div>
    </div>
  );
};

export default Education;
