import styles from './Logo.module.scss';
import heroLogo from '../../../static/logo/logo-art-leto-2.png';

const Logo = () => {
  return (
    <div className={styles.root}>
      <img
        src={heroLogo}
        className={styles.heroImage}
        alt="Арт-лето в Бахрушинском музее"
      />
      <p className={styles.tagline}>
        <span className={styles.taglineLine}>ТВОРЧЕСКИЕ ПРОГРАММЫ</span>
        <span className={styles.taglineLine}>ДЛЯ ДЕТЕЙ И ВЗРОСЛЫХ</span>
      </p>
    </div>
  );
};

export default Logo;
