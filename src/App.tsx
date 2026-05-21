import React, { useRef } from 'react';
import { isMobile } from 'react-device-detect';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import testEvents from './Events';
import { IEvent } from './types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';
import Page3 from './components/Pages/Page3';
import Page4 from './components/Pages/Page4';
import Page5 from './components/Pages/Page5';
import Page6 from './components/Pages/Page6';
import Page7 from './components/Pages/Page7';
import Page8 from './components/Pages/Page8';
import Page9 from './components/Pages/Page9';
import Page10 from './components/Pages/Page10';
import Page11 from './components/Pages/Page11';
import Page12 from './components/Pages/Page12';
import AboutUs from './AboutUs';
import Contacts from './Contacts';

import ScrollToTop from './components/Slider/ScrollToTop';
import Abonements from './components/Pages/Abonements';
import { GRID_MONTH_ANCHOR_IDS } from './components/Grid/Grid';

interface Month {
  id: number;
  title: string;
  color: string;
  count: number;
}

const monthsJSX: Month[] = [
  { id: 0, title: 'Творческие программы для детей и взрослых', color: '#A31A30', count: 9 },
];

const MobileHeader = ({
  scrollToMonthRow,
}: {
  scrollToMonthRow: (id: (typeof GRID_MONTH_ANCHOR_IDS)[number]) => void;
}) => {
  return (
    <>
      <div className={styles.mobileHeader}>
        <Header scrollToMonthRow={scrollToMonthRow} />
      </div>
      <Slider />
    </>
  );
};

const MainContent = () => {
  const data = testEvents;
  const isError = false;
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  const scrollToMonthRow = (anchorId: (typeof GRID_MONTH_ANCHOR_IDS)[number]) => {
    document.getElementById(anchorId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

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
          <MobileHeader scrollToMonthRow={scrollToMonthRow} />
          
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
          <Header scrollToMonthRow={scrollToMonthRow} />
          <Slider />
        </>
      )}
      
      {!isMobile && !isError && 
        monthsJSX.map((month, index) => {
          const monthEvents = getEventsForMonth(data, month.count);
          if (monthEvents.length === 0) return null;

          return (
            <div key={month.id} ref={el => (sectionRefs.current[index] = el)}>
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
          <Route path="/Pages/Page5" element={<Page5 />} />
          <Route path="/Pages/Page6" element={<Page6 />} />
          <Route path="/Pages/Page7" element={<Page7 />} />
          <Route path="/Pages/Page8" element={<Page8 />} />
          <Route path="/Pages/Page9" element={<Page9 />} />
          <Route path="/Pages/Page10" element={<Page10 />} />
          <Route path="/Pages/Page11" element={<Page11 />} />
          <Route path="/Pages/Page12" element={<Page12 />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Pages/Abonements" element={<Abonements />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;