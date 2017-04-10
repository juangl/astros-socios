import styled from 'styled-components';

const HrColored = styled.hr`
  border-color: ${props => props.color || props.theme.secondaryColor};
  opacity: ${({ opacity }) => opacity};
  border-style: solid;
  border-width: 2px 0;
  height: 3px;
  margin: .5rem auto;
  max-width: 200px;
`;

export default HrColored;