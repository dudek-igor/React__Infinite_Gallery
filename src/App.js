import Heading from './components/Heading';
import UnsplashImages from './components/Images/Images';
import { OvalLoader, ThreeDots } from './components/LoadingComponents';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { StyledError, GlobalStyle } from './App.styled';
import InfiniteScroll from 'react-infinite-scroller';

const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState();

  const fetchImages = useCallback(async () => {
    try {
      const apiLink = `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACC_KEY}&count=12&orientation=portrait`;
      const { data } = await axios.get(apiLink);
      setImages([...images, ...data]);
    } catch (error) {
      if (typeof error.response.data === 'string') {
        setError(error.response.data);
      } else if (error.response.data.errors) {
        setError(error.response.data.errors.join(', '));
      }
    }
  }, [images]);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyle />
      <>
        <Heading />
        {error && !images.length && <StyledError>{error}</StyledError>}
        {images.length || error ? (
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
        {error && !!images.length && <StyledError>{error}</StyledError>}
      </>
    </>
  );
};

export default App;
