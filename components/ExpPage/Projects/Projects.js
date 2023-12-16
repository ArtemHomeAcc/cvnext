import { useTranslations } from 'next-intl';
import classes from '../css/expPage.module.scss';
import { useRouter } from 'next/router';

const Projects = ({ active, projectInfo, onActive, onToggleProjectRise }) => {
  const t = useTranslations('ABOUT');
  const router = useRouter();
  const { locale } = router;

  const elements = projectInfo.map((item) => {
    const { id, rise } = item;

    return (
      <div key={id} className={classes.accordion_block}>
        <p
          className={`${classes.accordion_block__item} ${rise && classes.active_style}`}
          type="button"
          tabIndex={0}
          onClick={() => {
            onToggleProjectRise(id);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onToggleProjectRise(id);
            }
          }}
        >
          <span>{locale === item.uk.language ? item.uk.name : item.en.name}</span>
        </p>
      </div>
    );
  });

  return (
    <div className={classes.job__section__titles}>
      <div className={`${classes.accordion_heading} ${active && classes.active_style}`}>
        <span
          onClick={onActive}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onActive();
            }
          }}
        >
          {t('PROJECTS')}
        </span>
      </div>
      <div
        className={`${
          active ? classes.accordion_block_content__active : classes.accordion_block_content
        }`}
        style={active ? { maxHeight: '110px' } : { maxHeight: '0' }}
      >
        {elements}
      </div>
    </div>
  );
};

export default Projects;
