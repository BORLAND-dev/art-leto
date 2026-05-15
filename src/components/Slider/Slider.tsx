import styles from './Slider.module.scss';
import Logo from './Logo/Logo';

const Slider = () => {
  return (
    <div className={styles.root}>
      <a
        href="https://bakhrushinmuseum.ru"
        className={styles.logoLink}
        aria-label="Сайт Государственного центрального театрального музея им. А. А. Бахрушина"
      >
        <Logo />
      </a>
      <p className={styles.text}>
        Творческие программы
        <br />
        <span style={{ color: '#A41930' }}>В мастерской Давида Боровского</span>
      </p>
    </div>
  );
};

export default Slider;
