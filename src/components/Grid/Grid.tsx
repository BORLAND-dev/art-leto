import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IEvent } from '../../types';
import styles from './Grid.module.scss';
import { Link } from 'react-router-dom';

interface GridProps {
  events: IEvent[];
}

const ROW_HEADERS: { title?: string; month: string }[] = [
  { month: 'июнь' },
  { month: 'июль' },
  { month: 'август' },
];

/** Якоря для кнопок «ИЮНЬ / ИЮЛЬ / АВГУСТ» в шапке */
export const GRID_MONTH_ANCHOR_IDS = [
  'art-leto-month-june',
  'art-leto-month-july',
  'art-leto-month-august',
] as const;

const isExternal = (url: string) => /^https?:\/\//i.test(url);

const groupEventsByMonth = (events: IEvent[]): IEvent[][] => {
  const groups = new Map<number, IEvent[]>();
  for (const event of events) {
    const monthIndex = event.monthIndex ?? 0;
    const list = groups.get(monthIndex) ?? [];
    list.push(event);
    groups.set(monthIndex, list);
  }
  return Array.from(groups.entries())
    .sort(([a], [b]) => a - b)
    .map(([, monthEvents]) => monthEvents);
};

const parseEventDateTime = (
  raw?: string
): { date: string; time: string } | null => {
  if (!raw?.trim()) return null;
  const parts = raw.trim().split(/\s+/);
  if (parts.length >= 2) {
    return { date: parts[0], time: parts[1] };
  }
  return { date: parts[0], time: '' };
};

const CalendarIcon = () => (
  <svg className={styles.metaIcon} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1.5A2.5 2.5 0 0 1 22 6.5v13A2.5 2.5 0 0 1 19.5 22h-15A2.5 2.5 0 0 1 2 19.5v-13A2.5 2.5 0 0 1 4.5 4H6V3a1 1 0 0 1 1-1Zm13 8H4v9.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5V10Z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg className={styles.metaIcon} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-.75 3a1 1 0 0 1 1 1v4.19l2.72 2.72a1 1 0 0 1-1.42 1.42l-3-3A1 1 0 0 1 11 12.17V7a1 1 0 0 1 1-1Z"
    />
  </svg>
);

const EventCard = ({ event }: { event: IEvent }) => {
  const href = (event.eventLink || '').trim();
  const hasLink = href.length > 0;
  const internal = hasLink && !isExternal(href);
  const dateTime = parseEventDateTime(event.eventDateTime);
  const venue = event.tagVenue?.trim();
  const isBorovskiyVenue = /боровск/i.test(venue ?? '');

  const Image = (
    <div className={styles.imageContainer}>
      {dateTime && (
        <div className={styles.dateOverlay}>
          <span className={styles.datePart}>
            <CalendarIcon />
            {dateTime.date}
          </span>
          {dateTime.time && (
            <span className={styles.datePart}>
              <ClockIcon />
              {dateTime.time}
            </span>
          )}
        </div>
      )}
      <LazyLoadImage
        src={event.imageLink}
        alt={event.title || 'Событие'}
        className={styles.image}
      />
    </div>
  );

  const Title = (
    <div className={styles.titleRow}>
      <p className={styles.title}>{event.title}</p>
      <span
        className={styles.ageBadge}
        aria-label={`От ${(event.ageRating ?? '6+').replace('+', '')} лет`}
      >
        {event.ageRating ?? '6+'}
      </span>
    </div>
  );

  return (
    <article className={styles.event}>
      {hasLink ? (
        internal ? (
          <Link
            to={href}
            className={styles.imageLink}
            aria-label={`Подробнее: ${event.title}`}
          >
            {Image}
          </Link>
        ) : (
          <a
            href={href}
            className={styles.imageLink}
            aria-label={`Подробнее: ${event.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Image}
          </a>
        )
      ) : (
        Image
      )}

      <div className={styles.content}>
        {event.type && <p className={styles.type}>{event.type}</p>}

        {hasLink ? (
          internal ? (
            <Link
              to={href}
              className={styles.titleLink}
              aria-label={`Подробнее: ${event.title}`}
            >
              {Title}
            </Link>
          ) : (
            <a
              href={href}
              className={styles.titleLink}
              aria-label={`Подробнее: ${event.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Title}
            </a>
          )
        ) : (
          Title
        )}

        {venue && (
          <span
            className={
              isBorovskiyVenue ? styles.tagVenueBorovskiy : styles.tagVenue
            }
          >
            {venue}
          </span>
        )}

        {event.description && (
          <p className={styles.description} lang="ru" title={event.description}>
            {event.description}
          </p>
        )}
      </div>

      <div className={styles.btnGroup}>
        {hasLink &&
          (internal ? (
            <Link to={href} className={styles.btn} aria-label="Подробнее">
              ПОДРОБНЕЕ
            </Link>
          ) : (
            <a
              href={href}
              className={styles.btn}
              aria-label="Подробнее"
              target="_blank"
              rel="noopener noreferrer"
            >
              ПОДРОБНЕЕ
            </a>
          ))}
      </div>
    </article>
  );
};

const Grid = ({ events }: GridProps) => {
  if (!Array.isArray(events) || events.length === 0) {
    return <div className={styles.empty}>События скоро появятся</div>;
  }

  const rows = groupEventsByMonth(events);

  return (
    <div className={styles.wrapper}>
      {rows.map((rowEvents, rowIndex) => {
        const header = ROW_HEADERS[rowIndex];
        const anchorId =
          rowIndex < GRID_MONTH_ANCHOR_IDS.length
            ? GRID_MONTH_ANCHOR_IDS[rowIndex]
            : undefined;
        return (
          <section
            key={rowIndex}
            id={anchorId}
            className={styles.rowSection}
          >
            {header && (
              <header className={styles.rowHeader}>
                {header.title && (
                  <h2 className={styles.sectionTitle}>{header.title}</h2>
                )}
                <p className={styles.monthLabel}>{header.month}</p>
              </header>
            )}
            <div className={styles.root}>
              {rowEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Grid;
