// WorkshopCyclePage.tsx — updated with Footer
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./WorkshopCyclePage.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import page2Image from '../../static/images/19.jpeg';

// ------------------ Types ------------------
interface SessionItem { n: number; title: string; date: string; time?: string; url?: string; }

// ------------------ Consts ------------------
const IMG_FALLBACK = page2Image;
const VISIBLE_ROWS = 6;

// ------------------ Component ------------------
const WorkshopCyclePage: React.FC = () => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const images = [page2Image];

  const handleBuyTicket = (url?: string) =>
    window.open(
      url ??
        "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/6985/2025-06-04/15:00:00",
      "_blank",
      "noopener,noreferrer"
    );
  const sessions: SessionItem[] = useMemo(
    () => [
      {
        n: 1,
        title: "",
        date: "09.06.2026",
        time: "15:00",
        url: "https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/7213/2026-06-09/15:00:00",
      },
    ],
    []
  );

  const all = sessions;
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
          <h1 className={s.title}>ЦИКЛ ВСТРЕЧ «СКАЗОЧНАЯ МОЗАИКА» ЗОЛОТОЙ ПЕТУШОК</h1>

          <div className={s.description}>
            <p>На занятии мы познакомимся с музыкальным произведением композитора Н. Римского-Корсакова - оперой «Золотой петушок», поговорим об удивительных по красоте декорациях и о роли художника по костюмам. Узнаем, что такое скороговорки и медленноговорки, и даже перевоплотимся в одного из сказочных героев сказки А.С. Пушкина, а также создадим своего собственного Золотого Петушка.
</p>
          </div>

          <ul className={s.facts}>
            <li><span className={s.factName}>Продолжительность:</span> 90 минут</li>
            <li><span className={s.factName}>Стоимость:</span> 1300 руб. <span className={s.muted}>(входной билет входит в стоимость)</span></li>
            <li><span className={s.factName}>Максимум участников:</span> 10 человек</li>
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
                    7–9 лет
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
                        <div className={s.lessonTitle}>Занятие №{it.n}{it.title ? ` — ${it.title}` : ""}</div>
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
<div className={s.footerGap}>
  <Footer />
</div>
    </div>
  );
};

export default WorkshopCyclePage;
