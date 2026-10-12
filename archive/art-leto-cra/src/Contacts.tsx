import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contacts.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const VENUE_MAPS = [
  {
    id: "schepkina",
    name: "Дом-музей М.С. Щепкина",
    address: "ул. Щепкина, 47, стр. 2, Москва",
    metro: "ст. м. Проспект Мира",
    mapSrc:
      "https://yandex.ru/map-widget/v1/?ll=37.629079%2C55.781660&z=17&l=map&pt=37.629079%2C55.781660%2Cpm2rdm",
    mapTitle: "Карта: Дом-музей М.С. Щепкина, ул. Щепкина, 47",
  },
  {
    id: "borovskiy",
    name: "Музей-мастерская Д. Боровского",
    address: "Москва, Б. Афанасьевский переулок, д. 3, стр. 3",
    metro: "ст. м. Кропоткинская",
    mapSrc: "https://yandex.ru/map-widget/v1/-/CLU7QQZ4",
    mapTitle:
      "Карта: Мемориальный музей «Творческая мастерская театрального художника Давида Боровского»",
  },
] as const;

const Contacts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header/>
      <div className={styles.backButtonBar}>
        <button onClick={() => navigate("/")} className={styles.backButton}>
          ← Назад
        </button>
      </div>

      <section className={styles.contacts}>
        <h2 className={styles.pageTitle}>КОНТАКТЫ:</h2>

        <div className={styles.contactInfo}>
          <p className={styles.block}>
            <strong>Телефон:</strong> +7 (499) 484-77-77
          </p>

          {VENUE_MAPS.map((venue) => (
            <p key={`${venue.id}-address`} className={styles.block}>
              <strong>Адрес:</strong> {venue.address}
              <br />
              <span className={styles.muted}>({venue.metro})</span>
            </p>
          ))}
        </div>

        <h2 className={styles.mapHeading}>Как нас найти</h2>

        {VENUE_MAPS.map((venue) => (
          <div key={venue.id} className={styles.venueBlock}>
            <div className={styles.mapWrap}>
              <iframe
                title={venue.mapTitle}
                src={venue.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>

            <p className={styles.block}>
              <strong className={styles.venueName}>{venue.name}</strong>
            </p>
          </div>
        ))}

      </section>

      <div className={styles.footerGap}>
        <Footer />
      </div>
    </>
  );
};

export default Contacts;
