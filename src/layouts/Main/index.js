import React from 'react';
import { calculateScrollY, centerTop } from 'react-track/tracking-formulas';
import { TrackDocument, Track } from 'react-track';

import NavbarPrimary from '../../components/NavbarPrimary';
import Header from './pages/Header';
import Galleries from './pages/Galleries';
import About from './pages/About';
import Contact from './pages/Contact';

const MainLayout = () => (
  <div>
    <TrackDocument formulas={[calculateScrollY, centerTop]}>
      {(calculateScrollY, centerTop) => (
        <Track component="div" formulas={[centerTop]}>
          {(DivContainer, posCenterTop) => (
            <DivContainer>
              <NavbarPrimary expanded={calculateScrollY <= posCenterTop} />
              <Header calculateScrollY={calculateScrollY} />
            </DivContainer>
          )}
        </Track>
      )}
    </TrackDocument>
    <Galleries />
    <About />
    <Contact />
  </div>
);

export default MainLayout;
