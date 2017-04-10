import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { Col, Container, Row } from 'reactstrap';
import { Element } from 'react-scroll';

import bg from './bg.jpg';
import Isotype from '../../../../components/Isotype';

const ContrastSection = styled.section`
  background-color: ${({ theme }) => theme.contrastColor};
`;

const BlueBox = styled.div`
  min-width: 20rem;
  padding: 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.primaryColor};
`;

const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  padding: 1rem 1rem 20rem 1rem;
  text-align: right;
`;

const BoxWithBG = styled.div`
  background: url(${bg}) no-repeat top right / cover;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => transparentize(0.6, theme.primaryColor)};
`;

const StyledIsotype = styled(Isotype)`
  margin: 0 auto;
  width: 10rem;
  height: 10rem;
  .circles-primary-color {
    fill: #fff;
  }
  .circles-secondary-color {
    fill: ${({ theme }) => theme.tertiarColor};
  }
`;

const BrandName = styled.h2`
  font-weight: bold;
`;

const BrandSubname = styled.h4`
  font-weight: nornal;
  font-size: 1rem;
  color: ${({ theme }) => theme.tertiarColor};
`;
const About = () => (
  <Element name="about">
    <ContrastSection>
      <Container>
        <Row>
          <Col lg="6">
            <BlueBox>
              <InnerBox>
                <h3>Desde Santa María Del Valle, </h3><h4>Jalisco.</h4>
              </InnerBox>
            </BlueBox>
          </Col>
          <Col lg="6">
            <BoxWithBG>
              <Overlay>
                <StyledIsotype />
                <BrandName>Astros & Socios</BrandName>
                <BrandSubname>Aluminios, Arenados y Templados</BrandSubname>
              </Overlay>
            </BoxWithBG>
          </Col>
        </Row>
      </Container>
    </ContrastSection>
  </Element>
);

export default About;
