import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const ScrollDown = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
  text-align: center;
`;

const ScrollPageButton = styled(Link)`
  color: ${props => props.color} !important;
  font-size: 30px;
  line-height: 50px;
  height: 50px;
  width: 50px;
  border: 2px solid ${props => props.color};
  border-radius: 100%;
  padding: 0;
`;

const ScrollDownButton = ({color, href}) => (
  <ScrollDown>
    <ScrollPageButton to="galleries" href="#" smooth={true} duration={500} color={color} className="btn">
      <i className="fa fa-angle-down fa-fw" />
    </ScrollPageButton>
  </ScrollDown>
);

export default ScrollDownButton;