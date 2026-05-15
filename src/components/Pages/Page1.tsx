// WorkshopCyclePage.tsx — updated with Footer
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import s from "./WorkshopCyclePage.module.scss";
import Footer from "../Footer/Footer";
import borovskiyImage from '../../static/images/borovskiy2.jpg'; // ДОБАВЬ ЭТУ СТРОЧКУ

// ------------------ Types ------------------
type AgeTab = "5–7 лет" | "7–10 лет";
interface SessionItem { n: number; title: string; date: string; time?: string; url?: string; }
interface Presenter { name: string; lines: string[]; photo?: string; }

// ------------------ Consts ------------------
const IMG_FALLBACK = borovskiyImage; // ИЗМЕНИ ЭТУ СТРОЧКУ
const VISIBLE_ROWS = 6;

// ------------------ Component ------------------
const WorkshopCyclePage: React.FC = () => {
  const navigate = useNavigate();
  const [ageTab, setAgeTab] = useState<AgeTab>("7–10 лет");
  const [slide, setSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const images = [borovskiyImage]; // ИЗМЕНИ ЭТУ СТРОЧКУ

  const handleBuyTicket = (url?: string) =>
    window.open(
      url ??
        "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/6985/2025-06-04/15:00:00",
      "_blank",
      "noopener,noreferrer"
    );

  const sessions: Record<AgeTab, SessionItem[]> = useMemo(
  () => ({
  "5–7 лет": [
    { n: 1, title: "", date: "15.10.2025", time: "15:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7201/2025-10-15/15:00:00" },
    { n: 2, title: "", date: "29.10.2025", time: "15:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7201/2025-10-29/15:00:00" },
    { n: 3, title: "", date: "12.11.2025", time: "15:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7201/2025-11-12/15:00:00" },
    { n: 4, title: "", date: "26.11.2025", time: "15:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7201/2025-11-26/15:00:00" },
    { n: 5, title: "", date: "03.12.2025", time: "15:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7201/2025-12-03/15:00:00" },
    { n: 6, title: "", date: "17.12.2025", time: "15:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7201/2025-12-17/15:00:00" },
    { n: 7, title: "", date: "24.12.2025", time: "15:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7201/2025-12-24/15:00:00" },
  ],
  "7–10 лет": [
    { n: 1, title: "", date: "01.06.2026", time: "16:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7205/2025-10-17/18:00:00" },
    { n: 2, title: "", date: "31.10.2025", time: "18:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7205/2025-10-31/18:00:00" },
    { n: 3, title: "", date: "14.11.2025", time: "18:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7205/2025-11-14/18:00:00" },
    { n: 4, title: "", date: "28.11.2025", time: "18:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7205/2025-11-28/18:00:00" },
    { n: 5, title: "", date: "05.12.2025", time: "18:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7205/2025-12-05/18:00:00" },
    { n: 6, title: "", date: "19.12.2025", time: "18:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7205/2025-12-19/18:00:00" },
    { n: 7, title: "", date: "26.12.2025", time: "18:00", url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7205/2025-12-26/18:00:00" },
  ],
}),
[]

);

  const presenters: Presenter[] = [
    {
      name: "Малкина Лидия Дмитриевна",
      lines: [
        "Заместитель заведующего Мемориального музея",
        "«Творческая мастерская театрального художника",
        "Давида Боровского»",
      ],
       photo: "/Malkina.jpg", 
    },
    {
      name: "Она уволена",
      lines: [
        "Методист Мемориального музея",
        "«Творческая мастерская театрального",
        "художника Давида Боровского»",
      ],
      photo: "/Zinoveva.jpg", 
    },
  ];

  const all = sessions[ageTab];
  const hasOverflow = all.length > VISIBLE_ROWS;
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
          <h1 className={s.title}>С ЧЕГО НАЧИНАЕТСЯ ТЕАТР +5</h1>

          {/* ВЫБОР ВОЗРАСТА — центрированные чипы */}
          <div className={s.scheduleHeader}>
            <div className={s.controls}>
              <div className={s.ageFilter} role="tablist" aria-label="Возрастные группы">
                {(["5–7 лет", "7–10 лет"] as AgeTab[]).map((t) => (
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
            <p>Участники мастер-класса узнают, благодаря кому открылся первый в мире театральный музей и почему театр начинается не с вешалки, а с афиши, познакомятся с некоторыми театральными профессиями и попробуют выполнить упражнения по актерскому тренингу на развитие коммуникации, а также своими руками сделают афишу к собственному спектаклю.
</p>
          </div>

          <ul className={s.facts}>
            <li><span className={s.factName}>Продолжительность:</span> 90 минут</li>
            <li><span className={s.factName}>Стоимость:</span> 1300 руб. <span className={s.muted}>(входной билет входит в стоимость)</span></li>
            <li><span className={s.factName}>Максимум участников:</span> 10 человек</li>
            <li><span className={s.factName}>Группа:</span>5+ лет </li>
            <li><span className={s.factName}>Расписание занятий:</span>ПН 15:00-16:30 </li>
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
                  {/* <button type="button" className={s.ddBtn} onClick={() => handleBuyTicket("#")}>
                    КУПИТЬ АБОНЕМЕНТ на 6 занятий
                  </button> */}
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
                        <div className={s.lessonTitle}>Занятие №{it.n}
                           {/* —  */}
                           {it.title}</div>
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
