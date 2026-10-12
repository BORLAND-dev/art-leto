import styles from './Slider.module.scss';
import Logo from './Logo/Logo';
import leftCircle from '../../static/images/Group 2087325482.png';
import rightCircle from '../../static/images/Group 2087325486.png';

const DECOR_BUBBLES = [
  'bubbleY1',
  'bubbleY2',
  'bubbleT1',
  'bubbleT2',
  'bubbleT3',
  'bubbleP1',
  'bubbleP2',
  'bubbleO1',
  'bubbleO2',
  'bubbleR1',
  'bubbleR2',
  'bubbleR3',
] as const;

const Slider = () => {
  return (
    <div className={styles.root}>
      <div className={styles.bgDecor} aria-hidden="true">
        {DECOR_BUBBLES.map((name) => (
          <span key={name} className={`${styles.bubble} ${styles[name]}`} />
        ))}
      </div>

      <div className={styles.hero}>
        <div className={styles.circleLeft} aria-hidden="true">
          <img src={leftCircle} alt="" />
        </div>

        <a
          href="https://bakhrushinmuseum.ru"
          className={styles.logoLink}
          aria-label="Сайт Государственного центрального театрального музея им. А. А. Бахрушина"
        >
          <Logo />
        </a>

        <div className={styles.circleRight} aria-hidden="true">
          <img src={rightCircle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
