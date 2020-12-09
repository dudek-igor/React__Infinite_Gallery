import React from 'react';
import { StyledImage, StyledImageWrapper } from './Images.styled';
import PropTypes from 'prop-types';

const UnsplashImages = ({ images }) => {
  return (
    <StyledImageWrapper>
      {images.map(({ id, alt_description, urls: { regular } }) => (
        <StyledImage key={id} src={regular} alt={alt_description} />
      ))}
    </StyledImageWrapper>
  );
};

UnsplashImages.propTypes = {
  images: PropTypes.array.isRequired,
};

export default UnsplashImages;
