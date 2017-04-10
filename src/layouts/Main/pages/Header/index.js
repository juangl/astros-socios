import React from 'react';
import styled from 'styled-components';

import bg from './bg.jpg';
import Isotype from '../../../../components/Isotype';
import ScrollDownButton from '../../../../components/ScrollDownButton';
import HrColored from '../../../../components/HrColored';

const Container = styled.header`
  background: url(${bg}) no-repeat 0 0 / cover;
  position: relative;
  width: 100vw;
  height: 90vh;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, .35);
  width: 100%;
  height: 100%;
`;

const HeaderContet = styled.div`
  position: absolute;
  top: 50%;
  padding: 0 50px;
  transform: translateY(-50%);
  width: 100%;
  `;

const Inner = styled.div`
  text-align: center;
`;

const IntroIsotype = styled(Isotype)`
  width: 15rem;
  height: auto;
  .circles-primary-color, .circles-secondary-color {
    fill: #fff;
  }
  @media(max-width:34em) {
    width: 10rem;
  }
`;

const BrandName = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 3rem;
  @media(max-width:34em) {
    font-size: 2rem;
  }
`;

const LogoSubtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: lighter;
  color: #fff;
  @media(max-width:34em) {
    font-size: 1rem;
  }
`;

const Header = ({ calculateScrollY }) => (
  <Container
    style={{
      backgroundPosition: `center ${calculateScrollY * 0.15}px`,
    }}>
    <Overlay>
      <HeaderContet>
        <Inner
          style={{
            transform: `translate(0, ${calculateScrollY * 0.10 * -1}px)`,
          }}>
          <div
            style={{
              transform: `translate(0, ${calculateScrollY * 0.10 * -1}px)`,
            }}>
            <IntroIsotype />
            <BrandName>Astros & Socios</BrandName>
            <HrColored opacity="0.5" />
            <LogoSubtitle>Aluminios, Arenados y Templados</LogoSubtitle>
          </div>
        </Inner>
      </HeaderContet>
      <ScrollDownButton color="#fff" />
    </Overlay>
  </Container>
);

export default Header;
