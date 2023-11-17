import { useSelector } from 'react-redux';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

const CourseDescription = () => {
  const t = useTranslations('ABOUT');
  const router = useRouter();
  const { locale } = router;

  const { filters, activeFilter } = useSelector((state) => state.filters);

  const viewDescr = (arr) => {
    return arr.map(({ _id, name, description }) => {
      const correctLanguageData =
        locale === description.uk.language ? description.uk.descr : description.en.descr;
      if (activeFilter === name) {
        return (
          <div key={_id}>
            {t('COURSE')}: <span>{name}</span> <br />
            <br />
            {t('DESCR')}: {correctLanguageData}
          </div>
        );
      } else {
        return null;
      }
    });
  };

  const elements = viewDescr(filters);

  return <div>{elements}</div>;
};

export default CourseDescription;
