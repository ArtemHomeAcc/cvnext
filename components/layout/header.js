import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import classes from './header.module.scss';
import fb from './icons/facebook.svg';
import telegram from './icons/telegram-app.svg';
import linkedin from './icons/icons8-linkedin-circled.svg';
import eng from './icons/Uk.svg';
import ua from './icons/ukraine.svg';
import home from './icons/home.svg';

function Header() {
  const router = useRouter();
  const { locales } = router;
  function handleLanguege(locale) {
    router.push(`${locale}${router.asPath}`, `${locale}${router.asPath}`, { locale });
  }

  return (
    <header className={classes.header}>
      <div className={classes.home}>
        <div className={classes.item}>
          <Link href="/">
            <Image src={home} alt="home" className={classes.icon} />
          </Link>
        </div>
      </div>
      <div className={classes.contacts}>
        <div className={classes.item}>
          <a href="https://www.facebook.com/artem.zakharchuk.7/">
            <Image src={fb} alt="icon_FB" className={classes.icon} />
          </a>
        </div>
        <div className={classes.item}>
          <a href="https://t.me/Artem_Zakharchuk">
            <Image src={telegram} alt="icon_telegram" className={classes.icon} />
          </a>
        </div>
        <div className={classes.item}>
          <a href="https://www.linkedin.com/in/artem-zakharchuk-818ba3131/">
            <Image src={linkedin} alt="icon_linkedin" className={classes.icon} />
          </a>
        </div>
      </div>
      <div className={classes.language}>
        <div className={classes.item}>
          <button onClick={() => handleLanguege(locales[1])}>
            <Image src={eng} alt="eng_language" className={classes.icon} />
          </button>
        </div>
        <div className={classes.item}>
          <button onClick={() => handleLanguege(locales[0])}>
            <Image src={ua} alt="ua_language" className={classes.icon} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
