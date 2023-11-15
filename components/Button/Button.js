import Link from 'next/link';
import { useTranslations } from 'next-intl';
import classes from './Button.module.scss';

function Button({ linkto, tN }) {
  const t = useTranslations('MAIN');
  return (
    <Link href={linkto} className={`${classes.btn}`}>
      <div>{t(`${tN}`)}</div>
    </Link>
  );
}

export default Button;
