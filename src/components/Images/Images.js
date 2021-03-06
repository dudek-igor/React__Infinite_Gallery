import React, { useEffect, useRef } from 'react';
import { StyledImage, StyledImageWrapper } from './Images.styled';
import gsap from 'gsap';
import PropTypes from 'prop-types';

const UnsplashImages = ({ images }) => {
  const refImages = useRef(null);
  useEffect(() => {
    const images = [...refImages.current.children].slice(-12);
    gsap.to(images, {
      duration: 1,
      opacity: 1,
      boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.8)',
      stagger: 0.3,
    });
  }, [images]);
  return (
    <StyledImageWrapper ref={refImages}>
      {images.map(({ id, alt_description, urls: { small } }) => (
        <StyledImage
          loading='lazy'
          key={id}
          src={small}
          alt={alt_description}
        />
      ))}
    </StyledImageWrapper>
  );
};

UnsplashImages.propTypes = {
  images: PropTypes.array.isRequired,
};

export default UnsplashImages;
