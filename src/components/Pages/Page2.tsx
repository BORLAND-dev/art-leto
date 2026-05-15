// WorkshopCyclePage.tsx — updated with Footer
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./WorkshopCyclePage.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import borovskiyImage3 from '../../static/images/borovskiy3.png'; // ПЕРЕНЕСИ СЮДА

// ------------------ Types ------------------
type AgeTab = "7–9 лет" | "10–12 лет";
interface SessionItem { n: number; title: string; date: string; time?: string; url?: string; }
interface Presenter { name: string; lines: string[]; photo?: string; }

// ------------------ Consts ------------------
const IMG_FALLBACK = borovskiyImage3; // ИЗМЕНИ ЭТУ СТРОЧКУ
const VISIBLE_ROWS = 6;

// ------------------ Component ------------------
const WorkshopCyclePage: React.FC = () => {
  const navigate = useNavigate();
  const [ageTab, setAgeTab] = useState<AgeTab>("7–9 лет");
  const [slide, setSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const images = [borovskiyImage3]; // ИЗМЕНИ ЭТУ СТРОЧКУ

  const handleBuyTicket = (url?: string) =>
    window.open(
      url ??
        "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/6985/2025-06-04/15:00:00",
      "_blank",
      "noopener,noreferrer"
    );
const abonementLinks: Record<AgeTab, string> = {
  "7–9 лет": "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/abonement/49",
  "10–12 лет": "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/abonement/53",
};
  const sessions: Record<AgeTab, SessionItem[]> = useMemo(
  () => ({
    "7–9 лет": [
      { n: 1, title: "Знакомство с макетированием: создаем прирезку из бумаги", date: "19.10.2025", time: "11:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7213/2025-10-19/11:00:00" },
      { n: 2, title: "Выбираем произведение: создаем эскиз и макетных человечков", date: "26.10.2025", time: "11:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7225/2025-10-26/11:00:00" },
      { n: 3, title: "Придумываем персонажей: рисуем эскиз костюма", date: "02.11.2025", time: "11:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7261/2025-11-02/11:00:00" },
      { n: 4, title: "Воплощаем идею: создаем интерьерный уголок", date: "09.11.2025", time: "11:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7269/2025-11-09/11:00:00" },
      { n: 5, title: "Добавляем детали: создаем наполнение для уголка", date: "16.11.2025", time: "11:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7281/2025-11-16/11:00:00" },
      { n: 6, title: "Завершаем работу: дополняем макет и представляем его зрителям", date: "23.11.2025", time: "11:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7289/2025-11-23/11:00:00" },
    ],
    "10–12 лет": [
      { n: 1, title: "Знакомство с макетированием: создаем прирезку из бумаги", date: "19.10.2025", time: "13:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7217/2025-10-19/13:00:00" },
      { n: 2, title: "Изучаем масштаб: создаем коробку сцены и стаффаж", date: "26.10.2025", time: "13:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7229/2025-10-26/13:00:00" },
      { n: 3, title: "Выбираем произведение: создаем эскиз будущего макета", date: "02.11.2025", time: "13:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7265/2025-11-02/13:00:00" },
      { n: 4, title: "Придумываем персонажей: рисуем эскиз костюма", date: "09.11.2025", time: "13:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7277/2025-11-09/13:00:00" },
      { n: 5, title: "Создаем декорации: изготавливаем наполнение для коробки сцены", date: "16.11.2025", time: "13:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7285/2025-11-16/13:00:00" },
      { n: 6, title: "Завершаем работу: дополняем макет и представляем его зрителям", date: "23.11.2025", time: "13:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7297/2025-11-23/13:00:00" },
    ],
  }),
  []
);


  const presenters: Presenter[] = [
    {
      name: "Озолс Элина Олеговна",
      lines: [
        "Ведущий программы",
        "Художник-постановщик театра и кино",
        "Ранее преподавала дисциплину «Макетирование» в КМТИ им. Вишневской",
      ],
       photo: "/Ozols.jpg", 
    },
    {
      name: "Зиновьева Анастасия Олеговна",
      lines: [
        "Методист Мемориального музея",
        "«Творческая мастерская театрального",
        "художника Давида Боровского»",
      ],
      photo: "/Zinoveva.jpg", 
    },
  ];

  const all = sessions[ageTab];
  const hasOverflow = all.length >= VISIBLE_ROWS;
  const visible = expanded ? all : all.slice(0, VISIBLE_ROWS);

  return (
    <div className={s.page}>
      <Header />
      <div className={s.backButtonWrapper}>
        <button onClick={() => navigate("/")} className={s.backButton}>
          ← Назад
        </button>
      </div>

      <div className={s.wrapper}>
        {/* ЛЕВАЯ КОЛОНКА */}
        <aside className={s.media} aria-label="Галерея изображений занятия">
          <div className={s.slideBox}>
            <img
              className={s.slideImg}
              src={images[slide]}
              alt="Фото занятия"
              onError={(e) => ((e.currentTarget as HTMLImageElement).src = IMG_FALLBACK)}
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${s.nav} ${s.prev}`}
                  onClick={() => setSlide((p) => (p === 0 ? images.length - 1 : p - 1))}
                  aria-label="Предыдущее изображение"
                >‹</button>
                <button
                  type="button"
                  className={`${s.nav} ${s.next}`}
                  onClick={() => setSlide((p) => (p === images.length - 1 ? 0 : p + 1))}
                  aria-label="Следующее изображение"
                >›</button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className={s.dots} role="tablist" aria-label="Переключатели слайдов">
              {images.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  className={`${s.dot} ${i === slide ? s.active : ""}`}
                  onClick={() => setSlide(i)}
                  role="tab"
                  aria-selected={i === slide}
                  aria-controls={`slide-${i}`}
                />
              ))}
            </div>
          )}
        </aside>

        {/* ПРАВАЯ КОЛОНКА */}
        <main className={s.content}>
          <h1 className={s.title}>ЦИКЛ ВСТРЕЧ «СКАЗОЧНАЯ МОЗАИКА» ЗОЛОТОЙ ПЕТУШОК 5+»</h1>

          {/* ВЫБОР ВОЗРАСТА — центрированные чипы */}
          <div className={s.scheduleHeader}>
            <div className={s.controls}>
              <div className={s.ageFilter} role="tablist" aria-label="Возрастные группы">
                {(["7–9 лет", "10–12 лет"] as AgeTab[]).map((t) => (
                  <button
                    type="button"
                    key={t}
                    className={`${s.ageBtn} ${t === ageTab ? s.isActive : ""}`}
                    aria-pressed={t === ageTab}
                    onClick={() => { setAgeTab(t); setExpanded(false); }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={s.description}>
            <p>На занятии мы познакомимся с музыкальным произведением композитора Н. Римского-Корсакова - оперой «Золотой петушок», поговорим об удивительных по красоте декорациях и о роли художника по костюмам. Узнаем, что такое скороговорки и медленноговорки, и даже перевоплотимся в одного из сказочных героев сказки А.С. Пушкина, а также создадим своего собственного Золотого Петушка.
</p>
          </div>

          <ul className={s.facts}>
            <li><span className={s.factName}>Продолжительность:</span> 90 минут</li>
            <li><span className={s.factName}>Стоимость:</span> 1300 руб. <span className={s.muted}>(входной билет входит в стоимость)</span></li>
             <li><span className={s.factName}>Абонемент на 6 занятий:</span> 6000 руб. </li>
            <li><span className={s.factName}>Максимум участников:</span> 10 человек</li>
            <li><span className={s.factName}>Группа:</span>5+ лет </li>
            <li> <span className={s.factName}> Расписание занятий:</span>ВСК 15:00-16:30 </li>
           
          </ul>

          {/* <button type="button" className={s.buy} onClick={() => handleBuyTicket()}>КУПИТЬ БИЛЕТ</button> */}

          {/* РАСПИСАНИЕ */}
          <section
            className={`${s.schedule} ${expanded ? s.isExpanded : s.isCollapsed}`}
            aria-expanded={expanded}
            aria-label="Расписание занятий"
          >
            <div className={s.scheduleHeader}>
              <span>Расписание занятий:</span>
              <div className={s.controls}>
                <div className={s.dropdown}>
                  <button type="button" className={s.ddBtn} aria-haspopup="listbox" aria-expanded="false">
                    {ageTab}
                  </button>
                </div>
                <div className={s.dropdown}>
                <button
                type="button"
                className={s.ddBtn}
                onClick={() => handleBuyTicket(abonementLinks[ageTab])}
                 >
                КУПИТЬ АБОНЕМЕНТ на занятия
              </button>
            </div>
              </div>
            </div>

            <div className={s.table}>
              <div id="schedule-table" className={s.tableClip}>
                {visible.map((it) => {
                  const disabled = it.date === "уточняется";
                  return (
                    <div key={it.n} className={s.row}>
                      <div className={s.cellInfo}>
                        <div className={s.lessonTitle}>Занятие №{it.n} — {it.title}</div>
                      </div>
                      <div className={s.cellDate}>
                        {it.date}
                        {it.time && <div className={s.time}>{it.time}</div>}
                      </div>
                      <div className={s.cellAction}>
                        <button
                          type="button"
                          className={s.smallBuy}
                          disabled={disabled}
                          onClick={() => handleBuyTicket(it.url)}
                        >
                          КУПИТЬ БИЛЕТ
                        </button>
                      </div>
                    </div>
                  );
                })}
                {hasOverflow && !expanded && <div className={s.fade} />}
              </div>
            </div>

            {hasOverflow && (
              <div className={s.scheduleFooter}>
                <button
                  type="button"
                  className={s.toggleBtn}
                  data-label-collapsed="Показать все"
                  data-label-expanded="Свернуть"
                  onClick={() => setExpanded((v) => !v)}
                  aria-controls="schedule-table"
                  aria-expanded={expanded}
                >
                  <span className={s.toggleBtnIcon} aria-hidden="true" />
                </button>
              </div>
            )}
          </section>
        </main>
      </div>

      {/* НИЖНИЙ БЛОК — ВЕДУЩИЕ */}
      <section className={s.leads}>
        <h2 className={s.leadsTitle}>Ведущие</h2>
        <div className={s.leadGrid}>
          {presenters.map((p) => (
            <article key={p.name} className={s.leadCard}>
              <div className={s.leadPhoto}>
                {p.photo ? (
                  <img
                      src={p.photo} 
                    alt={`Фото ведущего: ${p.name}`}
                    className={s.leadImg}
                    onError={(e) => ((e.currentTarget as HTMLImageElement).style.visibility = "hidden")}
                  />
                ) : (
                  <div className={s.leadPhInner}>Фото ведущего</div>
                )}
              </div>
              <div className={s.leadText}>
                <div className={s.leadName}>{p.name}</div>
                {p.lines.map((line, i) => (
                  <div key={i} className={s.leadLine}>{line}</div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

     <div className={s.footerGap}>
  <Footer />
</div>
    </div>
  );
};

export default WorkshopCyclePage;
