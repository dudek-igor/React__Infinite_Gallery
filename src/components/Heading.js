import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  max-width: 100%;
  height: 20vh;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const StyledHeaderContent = styled.h1`
  font-size: 50px;
  @media (max-width: 374px) {
    font-size: 30px;
  }
`;

const Heading = () => {
  return (
    <StyledHeader>
      <StyledHeaderContent>Infinite Unsplash Gallery</StyledHeaderContent>
    </StyledHeader>
  );
};

export default Heading;
