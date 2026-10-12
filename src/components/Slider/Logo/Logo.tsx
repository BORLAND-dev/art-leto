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
    </div>
  );
};

export default Logo;
