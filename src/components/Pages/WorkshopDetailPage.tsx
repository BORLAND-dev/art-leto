import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import s from './WorkshopCyclePage.module.scss';
import type { WorkshopDetailConfig } from './workshopDetailConfig';
import { getVenueAddress } from './workshopDetailConfig';

const CalendarIcon = () => (
  <svg className={s.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1.5A2.5 2.5 0 0 1 22 6.5v13A2.5 2.5 0 0 1 19.5 22h-15A2.5 2.5 0 0 1 2 19.5v-13A2.5 2.5 0 0 1 4.5 4H6V3a1 1 0 0 1 1-1Zm13 8H4v9.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5V10Z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg className={s.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-.75 3a1 1 0 0 1 1 1v4.19l2.72 2.72a1 1 0 0 1-1.42 1.42l-3-3A1 1 0 0 1 11 12.17V7a1 1 0 0 1 1-1Z"
    />
  </svg>
);

const PriceIcon = () => (
  <svg className={s.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M7 4a3 3 0 0 0-3 3v2h2V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2h2V7a3 3 0 0 0-3-3H7Zm13 7H4v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6Zm-5 2a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1H9a1 1 0 1 1 0-2h6v-1a1 1 0 0 1 1-1Z"
    />
  </svg>
);

const VenueIcon = () => (
  <svg className={s.infoIcon} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
    />
  </svg>
);

const WorkshopDetailPage: React.FC<WorkshopDetailConfig> = ({
  title,
  themeTag,
  image,
  imageAlt,
  ticketUrl,
  dateShort,
  timeRange,
  durationLabel,
  priceLabel,
  imageDateBadge,
  venueKey,
  descriptionParagraphs,
}) => {
  const navigate = useNavigate();
  const venueAddress = getVenueAddress(venueKey);

  const handleBuyTicket = () =>
    window.open(ticketUrl, '_blank', 'noopener,noreferrer');

  return (
    <div className={s.page}>
      <Header />
      <div className={s.backButtonWrapper}>
        <button type="button" onClick={() => navigate('/')} className={s.backButton}>
          ← Назад
        </button>
      </div>

      <div className={`${s.wrapper} ${s.wrapperDetailV3}`}>
        <main className={s.content}>
          <h1 className={s.detailTitleV3}>
            МАСТЕР-КЛАСС «{title}»
          </h1>

          <div className={s.tagsRow}>
            <span className={`${s.tagPill} ${s.tagTheme}`}>{themeTag}</span>
            <span className={`${s.tagPill} ${s.tagDuration}`}>{durationLabel}</span>
            <span className={`${s.tagPill} ${s.tagAge}`}>6+</span>
          </div>

          <div className={s.description}>
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className={s.infoCardsRow}>
            <div className={`${s.infoCard} ${s.infoCardDate}`}>
              <span className={s.infoCardLine}>
                <CalendarIcon />
                {dateShort}
              </span>
              <span className={s.infoCardLine}>
                <ClockIcon />
                {timeRange}
              </span>
            </div>
            <div className={`${s.infoCard} ${s.infoCardPrice}`}>
              <span className={s.infoCardLine}>
                <PriceIcon />
                {priceLabel}
              </span>
              <span className={s.priceIncludedNote}>
                (входной билет входит в стоимость)
              </span>
            </div>
          </div>

          <div className={`${s.infoCard} ${s.infoCardVenue}`}>
            <span className={s.infoCardLine}>
              <VenueIcon />
              {venueAddress}
            </span>
          </div>

          <button type="button" className={s.mainBuyV3} onClick={handleBuyTicket}>
            КУПИТЬ БИЛЕТ
          </button>
        </main>

        <aside className={s.media} aria-label="Фото занятия">
          <div className={`${s.slideBox} ${s.slideBoxPortrait}`}>
            <span className={s.dateBadge}>{imageDateBadge}</span>
            <img
              className={s.slideImg}
              src={image}
              alt={imageAlt}
              onError={(e) => {
                e.currentTarget.style.visibility = 'hidden';
              }}
            />
          </div>
        </aside>
      </div>

      <div className={s.footerGap}>
        <Footer />
      </div>
    </div>
  );
};

export default WorkshopDetailPage;
