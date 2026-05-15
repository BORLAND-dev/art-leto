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
        Чтобы каникулы прошли интересно и с пользой, в рамках летней программы{' '}
        <span className={styles.accent}>«Арт-лето в Бахрушинском музее»</span>{' '}
        Детский центр разработал два цикла встреч с мастер-классами{' '}
        <span className={styles.accent}>«Сказочная мозаика»</span> и{' '}
        <span className={styles.accent}>«Театральный калейдоскоп»</span>.
        Летом скучать точно не придётся! Все в музей!
      </p>
    </div>
  );
};

export default Slider;
