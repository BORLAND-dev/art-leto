import React from "react";
import { isMobile } from "react-device-detect";
import styles from "./Footer.module.scss";

import logo from "../../static/images/BTM.svg";
import tg from "../../static/icons/tg.svg";
import vk from "../../static/icons/vk.svg";
import ok from "../../static/icons/ok.svg";
import dz from "../../static/icons/dz.svg";
import rt from "../../static/icons/rt.svg";
import phone from "../../static/icons/phone.svg";
import search from "../../static/icons/search.svg";
import partnerOsdLogo from "../../static/images/logo_osd_color__2024.png";



interface FooterProps {
  /** Если передан — будет вызван при клике на месяц в мобильной панели. */
  scrollToSection?: (index: number) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const handleGo = (index: number) => {
    if (scrollToSection) {
      scrollToSection(index);
      return;
    }
    // Фолбэк: скроллим к секции по id "section-{index}"
    const el = document.getElementById(`section-${index}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

const AddressBlock = () => (
  <a
    href="https://yandex.ru/maps/-/CLEg7MNv"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.addressBlock}
  >
    Место проведения:
    <br />
    Дом-музей М.С. Щепкина (ул. Щепкина, 47, стр. 2, Москва)
    <br />
    Мемориальный музей «Творческая мастерская театрального художника Давида Боровского»
    <br />
    Адрес: Москва, Б. Афанасьевский переулок, д. 3, стр. 3
    <br />
    (ст. м. Кропоткинская)
  </a>
);

  const PhonesBlock = () => (
    <div className={styles.telephone}>
      <img src={phone} alt="Телефон" />
      <div className={styles.col}>
        <a href="tel:+74994847777">+7 499 484-77-77</a>
        <a href="tel:+79636594088">+7 963 659-40-88</a>
      </div>
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
          href="https://afisha.yandex.ru/moscow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.bakhrushinmuseum.ru/wp-content/uploads/2025/05/partner2.png"
            alt="Партнёр 2"
          />
        </a>
        <a href="https://www.osd.ru/" target="_blank" rel="noopener noreferrer">
          <img
            src={partnerOsdLogo}
            alt="Партнёр 3 — ОСД"
          />
        </a>
      </div>
    </div>
  );

  return (
    <div className={styles.root}>
      
      {isMobile && (
        <div className={styles.mobilePanel}>
          
        </div>
      )}

      <div className={styles.top}>
        {/* Логотип + телефоны (мобильная укладка) */}
        {isMobile ? (
          <div className={styles.mobileMMM}>
            <a href="https://bakhrushinmuseum.ru" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Бахрушинский музей" className={styles.logo} />
            </a>
            <PhonesBlock />
          </div>
        ) : (
          <a href="https://bakhrushinmuseum.ru" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Бахрушинский музей" className={styles.logo} />
          </a>
        )}

        {/* Адрес */}
        <div className={styles.contacts}>
          <div className={styles.first}>
            <img src={search} alt="Поиск на карте" />
            <AddressBlock />
          </div>
        </div>

        {/* Телефоны (десктоп) */}
        {!isMobile && <PhonesBlock />}
      </div>

      <div className={styles.bottom}>
        <Socials />
        <Partners />
      </div>
    </div>
  );
};

export default Footer;
