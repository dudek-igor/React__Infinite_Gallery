import Heading from './components/Heading';
import UnsplashImages from './components/Images/Images';
import { OvalLoader, ThreeDots } from './components/LoadingComponents';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { StyledError, GlobalStyle } from './App.styled';
import InfiniteScroll from 'react-infinite-scroller';

const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const fetchImages = useCallback(async () => {
    try {
      const apiLink = `http://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACC_KEY}&count=10&orientation=portrait`;
      const { data } = await axios.get(apiLink);
      setImages([...images, ...data]);
    } catch (error) {
      if (typeof error.response.data === 'string') {
        setError(error.response.data);
      } else if (error.response.data.errors) {
        setError(error.response.data.errors.join(', '));
      }
      console.error({ error });
    }
  }, [images]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <>
      <GlobalStyle />
      <>
        <Heading />
        {error && !images.length.length && <StyledError>{error}</StyledError>}
        {images.length ? (
          <InfiniteScroll
            pageStart={0}
            loadMore={fetchImages}
            hasMore={true}
            loader={<ThreeDots key={0} />}
          >
            <UnsplashImages images={images} />
          </InfiniteScroll>
        ) : (
          <OvalLoader />
        )}
      </>
    </>
  );
};

export default App;
