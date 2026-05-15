import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IEvent } from '../../types';
import styles from './Grid.module.scss';
import { Link } from 'react-router-dom';

interface GridProps {
  events: IEvent[];
}

const isExternal = (url: string) => /^https?:\/\//i.test(url);

const Grid = ({ events }: GridProps) => {
  if (!Array.isArray(events) || events.length === 0) {
    return <div className={styles.empty}>События скоро появятся</div>;
  }

  return (
    <div className={styles.root}>
      {events.map((event) => {
        const href = (event.eventLink || '').trim();
        const hasLink = href.length > 0;
        const internal = hasLink && !isExternal(href);

        const Image = (
          <div className={styles.imageContainer}>
            <LazyLoadImage
              src={event.imageLink}
              alt={event.title || 'Событие'}
              className={styles.image}
            />
          </div>
        );

        const Title = <p className={styles.title}>{event.title}</p>;

        return (
          <article className={styles.event} key={event.id}>
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

              {event.description && (
                <p 
                  className={styles.description} 
                  lang="ru" 
                  title={event.description}
                >
                  {event.description}
                </p>
              )}
            </div>

            <div className={styles.btnGroup}>
              {hasLink &&
                (internal ? (
                  <Link 
                    to={href} 
                    className={styles.btn} 
                    aria-label="Подробнее"
                  >
                    Подробнее
                  </Link>
                ) : (
                  <a
                    href={href}
                    className={styles.btn}
                    aria-label="Подробнее"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Подробнее
                  </a>
                ))}
            </div>
          </article>
        );
      })}
    </div>
  );
};



export default Grid;