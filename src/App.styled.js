import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Montserrat', sans-serif;
  }
`;

export const StyledError = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;
