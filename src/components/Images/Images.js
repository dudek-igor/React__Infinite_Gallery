import React, { useEffect, useRef } from 'react';
import { StyledImage, StyledImageWrapper } from './Images.styled';
import gsap from 'gsap';
import PropTypes from 'prop-types';

const UnsplashImages = ({ images }) => {
  const refImages = useRef(null);
  useEffect(() => {
    const images = [...refImages.current.children].slice(-10);
    gsap.to(images, { duration: 2, opacity: 1, stagger: 0.3 });
  }, [images]);
  return (
    <StyledImageWrapper ref={refImages}>
      {images.map(({ id, alt_description, urls: { small } }) => (
        <StyledImage key={id} src={small} alt={alt_description} />
      ))}
    </StyledImageWrapper>
  );
};

UnsplashImages.propTypes = {
  images: PropTypes.array.isRequired,
};

export default UnsplashImages;
