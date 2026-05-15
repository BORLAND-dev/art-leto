import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Abonements.module.scss';

const Abonements = () => {
  const subscriptions = [
    {
      title: 'Курс «Юный сценограф» 6+',
      imageUrl: 'https://www.bakhrushinmuseum.ru/wp-content/uploads/2025/05/foto7-kvadrat.jpg', // Здесь будет ваша ссылка на изображение
      link: 'https://www.bakhrushinmuseum.ru/event/abonementnaya-programma-art-leto-kurs-yunyj-sczenograf/'
    },
    {
      title: '«Знакомимся с театральными профессиями» 4+',
      imageUrl: 'https://www.bakhrushinmuseum.ru/wp-content/uploads/2025/05/foto3-kvadrat.jpg', // Здесь будет ваша ссылка на изображение
      link: 'https://www.bakhrushinmuseum.ru/event/art-leto-czikl-vstrech-s-master-klassami-znakomimsya-s-teatralnymi-professiyami-6/'
    },
    {
      title: '«Знакомимся с театральными профессиями» 7+',
      imageUrl: 'https://www.bakhrushinmuseum.ru/wp-content/uploads/2025/05/foto4-kvadrat.jpg', // Здесь будет ваша ссылка на изображение
      link: 'https://www.bakhrushinmuseum.ru/event/art-leto-abonementnaya-programma-czikl-vstrech-s-master-klassami-znakomimsya-s-teatralnymi-professiyami-6/'
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Абонементные программы</h1>
      <div className={styles.cardsContainer}>
        {subscriptions.map((sub, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.cardTitle}>{sub.title}</h2>
            {sub.imageUrl && (
              <div className={styles.imageWrapper}>
                <img 
                  src={sub.imageUrl} 
                  alt={sub.title}
                  className={styles.cardImage}
                />
              </div>
            )}
            <a 
              href={sub.link} 
              className={styles.cardButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Подробнее
            </a>
          </div>
        ))}
      </div>
      <Link to="/" className={styles.backButton}>
        ← Назад к мероприятиям
      </Link>
    </div>
  );
};

export default Abonements;