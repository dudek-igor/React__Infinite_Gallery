import React from 'react';
import { StyledImage, StyledImageWrapper } from './Images.styled';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

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
