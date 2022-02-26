import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/features/productSlice';
import { Box, Featured, Features, Gallery, Info } from './components';
import { Categories, About, GoBack } from '../../components';

const Product = () => {
  const dispatch = useDispatch();
  const { productName } = useParams();
  const { product, isLoading, isError } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productName));
  }, [productName]);

  if (isLoading || product.length === 0) {
    return (
      <div className='loading-container'>
        <div className='loading'></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='error-container'>
        <h1 className='error'>
          Something went wrong. <br /> Try again
        </h1>
      </div>
    );
  }

  return (
    <main className='main-center'>
      <GoBack />
      <Info {...product[0]} />
      <div className='features-box'>
        <Features features={product[0].features} />
        <Box box={product[0].includes} />
      </div>
      <Gallery gallery={product[0].gallery} />
      <Featured featured={product[0].others} />
      <Categories />
      <About />
    </main>
  );
};

export default Product;
