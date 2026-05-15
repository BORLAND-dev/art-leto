import styles from './Logo.module.scss';
import heroLogo from '../../../static/logo/logo.png';

const Logo = () => {
  return (
    <div className={styles.root}>
      <img
        src={heroLogo}
        className={styles.heroImage}
        alt="Творческие программы"
      />
    </div>
  );
};

export default Logo;
