import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dz from '../../static/icons/dz.svg';
import ok from '../../static/icons/ok.svg';
import phone from '../../static/icons/phone.svg';
import rt from '../../static/icons/rt.svg';
import tg from '../../static/icons/tg.svg';
import vk from '../../static/icons/vk.svg';
import logo from '../../static/images/BTM.svg';
import styles from './Header.module.scss';

interface HeaderProps {
  scrollToSection?: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  

  return (
    <div className={styles.root}>
      <a href="https://bakhrushinmuseum.ru">
        <img className={styles.logo} src={logo} alt="Logo" />
      </a>

      <ul className={styles.menu}>
      
        <li className={styles.subscriptionButton}>
          <Link to="/AboutUs">О музее</Link>
        </li>

        <li className={styles.subscriptionButton}>
          <Link to="/Contacts">Контакты</Link>
        </li>

      </ul>
	  

      <div className={styles.socialMenu}>
        <a href="https://t.me/bakhrushinmuseum">
          <img src={tg} alt="Telegram" />
        </a>
        <a href="https://vk.com/bahrushinmuseum">
          <img src={vk} alt="VK" />
        </a>
        <a href="https://ok.ru/bakhrushinmuseum">
          <img src={ok} alt="OK" />
        </a>
        <a href="https://dzen.ru/bahrushinmuseum">
          <img src={dz} alt="DZ" />
        </a>
        <a href="https://rutube.ru/channel/23745556/">
          <img src={rt} alt="RT" />
        </a>
      </div>

      <div className={styles.telephone}>
        <img src={phone} alt="Phone" />
        <div className={styles.col}>
          <a href="tel:+74994847777">+7 499 484-77-77</a>
          <a href="tel:+79636594088">+7 963 659-40-88</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
