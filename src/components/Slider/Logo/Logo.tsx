import styles from './Logo.module.scss';
import heroLogo from '../../../static/logo/logo-art-leto-1.png';

const Logo = () => {
  return (
    <div className={styles.root}>
      <img
        src={heroLogo}
        className={styles.heroImage}
        alt="Арт-лето в Бахрушинском музее"
      />
      <p className={styles.tagline}>
        ТВОРЧЕСКИЕ ПРОГРАММЫ
        <br />
        ДЛЯ ДЕТЕЙ И ВЗРОСЛЫХ
      </p>
    </div>
  );
};

export default Logo;
