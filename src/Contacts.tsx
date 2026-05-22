import React from "react";
import { useNavigate } from "react-router-dom";
import { YMaps, Map, Placemark, ZoomControl, GeolocationControl } from "@pbe/react-yandex-maps";
import styles from "./Contacts.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Contacts: React.FC = () => {
  const navigate = useNavigate();

  // Координаты точки (пример для Б. Афанасьевского пер., 3с3)
  const coords: [number, number] = [55.7475, 37.6008];
  return (
    <>
    <Header/>
      <div className={styles.backButtonBar}>
        <button onClick={() => navigate("/")} className={styles.backButton}>
          ← Назад
        </button>
      </div>

      <section className={styles.contacts}>
        <h2>Адрес и часы работы:</h2>

        <p className={styles.block}>
          <strong className={styles.venueName}>Дом-музей М.С. Щепкина</strong>
          <strong>Адрес:</strong> ул. Щепкина, 47, стр. 2, Москва
          <br />
          <span className={styles.muted}>(ст. м. Проспект Мира)</span>
        </p>

        <p className={styles.block}>
          <strong className={styles.venueName}>Музей-мастерская Давида Боровского</strong>
          <strong>Адрес:</strong> Москва, Б. Афанасьевский переулок, д. 3, стр. 3
          <br />
          <span className={styles.muted}>(ст. м. Кропоткинская)</span>
        </p>

        <p className={styles.block}>
          <strong>Телефон:</strong> +7 (499) 484-77-77
        </p>

        <p className={styles.block}>
  <strong>Время работы:</strong>{" "}
  <span className={styles.block}>
    <br/>
    Ср — Сб: 13:00–21:00<br />
    Вс: 11:00–19:00<br />
    Пн, Вт — выходной
  </span>
</p>

        {/* Интерактивная карта */}
       <h2 className={styles.sectionTitle}>Как нас найти</h2>
<div className={styles.mapWrap}>
  <iframe
    src="https://yandex.ru/map-widget/v1/-/CLU7QQZ4"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
  />
</div>

      </section>

      <div className={styles.footerGap}>
        <Footer />
      </div>
    </>
  );
};

export default Contacts;
