import { useRouter } from 'next/router';
import classes from './DescrProject.module.scss';

const DescriptionProjects = ({ active, projectInfo }) => {
  const router = useRouter();
  const { locale } = router;

  const posDescription = projectInfo.map((item) => {
    const { id, rise } = item;

    const images = require.context('../../../public/img/projects', true);
    const image = images(`./${id}.jpg`).default;
    const languageInformationDisplay = locale === item.uk.language ? item.uk : item.en;

    const { name } = languageInformationDisplay;

    const workStyle = {
      display: rise && active ? 'block' : 'none',
      backgroundImage: `url(${image.src})`,
    };

    return (
      <a
        target="_blank"
        href={'https://vitam.vercel.app/uk'}
        rel="noopener noreferrer"
        className={classes.card}
        key={id}
        style={workStyle}
      >
        <span className={classes.name}>{name}</span>
      </a>
    );
  });

  return <div className={classes.wrapper}>{posDescription}</div>;
};

export default DescriptionProjects;
