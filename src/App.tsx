// import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';
import React, { useRef } from 'react';
import { isMobile } from 'react-device-detect';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import Line from './components/Line/Line';
import Slider from './components/Slider/Slider';
// import defaultt from './static/images/default.jpg';
import testEvents from './Events';
import { IEvent } from './types';
import logo2 from './static/logo/logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';
import Page3 from './components/Pages/Page3';
import Page4 from './components/Pages/Page4';
import AboutUs from './AboutUs';
import Contacts from './Contacts';

import ScrollToTop from './components/Slider/ScrollToTop';
import Abonements from './components/Pages/Abonements';

/* ===== ДАТЫ/ТАЙМЗОНЫ НЕ НУЖНЫ — ВЫКЛЮЧЕНО ===== */
// dayjs.extend(utc);
// dayjs.extend(timezone);
// dayjs.tz.setDefault('Europe/Moscow');

interface Month {
  id: number;
  title: string;
  color: string;
  count: number;
}

const monthsJSX: Month[] = [
  { id: 0, title: 'Творческие программы для детей и взрослых', color: '#A31A30', count: 9 },
];

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className={styles.mobileHeader}>
      <Header/>
      <div className={styles.mobileHero}>
        <div className={styles.mobileLogos}>
          <img src={logo2} alt='Мастерская Давида Боровского' className={styles.mainLogo} />
        </div>
        
        <div className={styles.mobileTitle}>
          <p className={styles.mobileIntro}>
            Чтобы каникулы прошли интересно и с пользой, в рамках летней программы «Арт-лето в Бахрушинском музее» Детский центр разработал два цикла встреч с мастер-классами «Сказочная мозаика» и «Театральный калейдоскоп». Летом скучать точно не придётся! Все в музей!
          </p>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  const data = testEvents;
  const isError = false;
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    if (isMobile && headingRefs.current[index]) {
      headingRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    } else {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getEventsForMonth = (events: IEvent[], _monthIndex: number) => {
    return events;
  };

  return (
    <>
      {isMobile ? (
        <div className={styles.mobileContainer}>
          <MobileHeader />
          
          <div className={styles.mobileContent}>
            {!isError && 
              monthsJSX.map((month, index) => {
                const monthEvents = getEventsForMonth(data, month.count);
                if (monthEvents.length === 0) return null;

                return (
                  <div key={month.id} ref={el => (sectionRefs.current[index] = el)}>
                    <div className={styles.mobileSectionHeader}>
                      <h2
                        ref={el => (headingRefs.current[index] = el)}
                        className={styles.mobileSectionTitle}
                      > 
                      </h2>
                      
                    </div>
                    <Grid events={monthEvents} />
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <>
          <Header scrollToSection={scrollToSection} />
          <Slider />
        </>
      )}
      
      {!isMobile && !isError && 
        monthsJSX.map((month, index) => {
          const monthEvents = getEventsForMonth(data, month.count);
          if (monthEvents.length === 0) return null;

          return (
            <div key={month.id} ref={el => (sectionRefs.current[index] = el)}>
               <Line color={month.color} word={month.title} />
              <Grid events={monthEvents} />
            </div>
          );
        })}
      
      <Footer scrollToSection={scrollToSection} />
    </>
  );
};

const App = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <Router>
      <ScrollToTop />
      <div ref={rootRef} className={styles.root}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Pages/Page1" element={<Page1 />} />
          <Route path="/Pages/Page2" element={<Page2 />} />
          <Route path="/Pages/Page3" element={<Page3 />} />
          <Route path="/Pages/Page4" element={<Page4 />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Pages/Abonements" element={<Abonements />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;