import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledOvalLoader = styled(Loader)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(80vh - 40px);
`;

const StyledThreeDotsLoader = styled(Loader)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OvalLoader = () => (
  <StyledOvalLoader type='Oval' color='#000000' height={70} width={70} />
);

export const ThreeDots = () => (
  <StyledThreeDotsLoader
    type='ThreeDots'
    color='#000000'
    height={80}
    width={80}
  />
);
