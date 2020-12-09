import styled from 'styled-components';

export const StyledImageWrapper = styled.section`
  max-width: 70%;
  margin: 20px auto;
  display: grid;
  grid-gap: 70px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 350px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
`;
