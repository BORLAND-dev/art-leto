import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Footer.module.scss";
import { GRID_MONTH_ANCHOR_IDS } from "../Grid/Grid";

import logo from "../../static/images/BTM-mark-burgundy.svg";
import tg from "../../static/icons/tg.svg";
import vk from "../../static/icons/vk.svg";
import ok from "../../static/icons/ok.svg";
import dz from "../../static/icons/dz.svg";
import rt from "../../static/icons/rt.svg";
import phone from "../../static/icons/phone.svg";
import search from "../../static/icons/search.svg";
import partnerOsdLogo from "../../static/images/logo_osd_color__2024.png";
import partnerYandexAfishaLogo from "../../static/images/yandex-afisha-horizontal-logo.png";
import partnerDetiFmLogo from "../../static/images/DF_logo_bezchastota.JPG";



interface FooterProps {
  /** Если передан — будет вызван при клике на месяц в мобильной панели. */
  scrollToSection?: (index: number) => void;
}

const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMonthClick = (monthIndex: number) => {
    const anchorId = GRID_MONTH_ANCHOR_IDS[monthIndex];
    if (!anchorId) return;

    if (location.pathname === "/") {
      document.getElementById(anchorId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    navigate(`/#${anchorId}`);
  };

  const handleContactsClick = () => {
    if (location.pathname !== "/Contacts") {
      navigate("/Contacts");
    }
  };

  const AddressBlock = () => (
    <div className={styles.addressBlock}>
      <div className={styles.addressItem}>
        <img src={search} alt="Локация" />
        <span>
          Мемориальный музей «Творческая мастерская театрального художника Давида Боровского»
          Адрес: Москва, Б. Афанасьевский переулок, д. 3, стр. 3 (ст. м. Кропоткинская)
        </span>
      </div>
      <div className={styles.addressItem}>
        <img src={search} alt="Локация" />
        <span>Дом-музей М.С. Щепкина</span>
      </div>
    </div>
  );

  const PhonesBlock = () => (
    <div className={styles.phoneBlock}>
      <div className={styles.telephone}>
        <img src={phone} alt="Телефон" />
        <div className={styles.col}>
          <a href="tel:+74994847777">+7 499 484-77-77</a>
          <a href="tel:+79636594088">+7 963 659-40-88</a>
        </div>
      </div>
      <a
        className={styles.ticketBtn}
        href="https://www.bakhrushinmuseum.ru/buy-tickets/"
        target="_blank"
        rel="noopener noreferrer"
      >
        КУПИТЬ БИЛЕТ
      </a>
    </div>
  );

  const Socials = () => (
    <div className={styles.menu}>
      <a href="https://t.me/bakhrushinmuseum" target="_blank" rel="noopener noreferrer">
        <img src={tg} alt="Telegram" />
      </a>
      <a href="https://vk.com/bahrushinmuseum" target="_blank" rel="noopener noreferrer">
        <img src={vk} alt="VK" />
      </a>
      <a href="https://ok.ru/bakhrushinmuseum" target="_blank" rel="noopener noreferrer">
        <img src={ok} alt="OK" />
      </a>
      <a href="https://dzen.ru/bahrushinmuseum" target="_blank" rel="noopener noreferrer">
        <img src={dz} alt="Дзен" />
      </a>
      <a href="https://rutube.ru/channel/23745556/" target="_blank" rel="noopener noreferrer">
        <img src={rt} alt="Rutube" />
      </a>
    </div>
  );

  const Partners = () => (
    <div className={styles.partners}>
      <div className={styles.partnerLogos}>
        <a
          href="https://www.osd.ru/newsinf.asp?nw=23556"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={partnerOsdLogo}
            alt="Партнёр 3 — ОСД"
          />
        </a>
        <a
          href="https://detifm.ru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={partnerDetiFmLogo}
            alt="Детское радио"
          />
        </a>
        <a
          href="https://afisha.yandex.ru/moscow/selections/kids-art-summer-in-the-bakhrushinsky-museum?city=moscow&source=rubric_kids_featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={partnerYandexAfishaLogo}
            alt="Яндекс Афиша"
          />
        </a>
      </div>
    </div>
  );

  const MonthNav = () => (
    <nav className={styles.monthNav} aria-label="Навигация по разделам">
      <button type="button" onClick={() => handleMonthClick(0)}>
        ИЮНЬ
      </button>
      <button type="button" onClick={() => handleMonthClick(1)}>
        ИЮЛЬ
      </button>
      <button type="button" onClick={() => handleMonthClick(2)}>
        АВГУСТ
      </button>
      <button type="button" onClick={handleContactsClick}>
        КОНТАКТЫ
      </button>
    </nav>
  );

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.contacts}>
          <AddressBlock />
        </div>

        <div className={styles.centerBlock}>
          <a href="https://bakhrushinmuseum.ru" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Бахрушинский музей" className={styles.logo} />
          </a>
          <MonthNav />
        </div>

        <div className={styles.rightBlock}>
          <PhonesBlock />
        </div>
      </div>

      <div className={styles.bottom}>
        <Socials />
        <Partners />
      </div>
    </div>
  );
};

export default Footer;
