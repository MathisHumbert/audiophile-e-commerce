import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/features/productSlice';
import { Box, Featured, Features, Gallery, GoBack, Info } from './components';
import { Categories, About } from '../../components';

const Product = () => {
  const dispatch = useDispatch();
  const { productName } = useParams();
  const { product, isLoading, isError } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productName));
  }, []);

  if (isLoading || product.length === 0) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong. Try again</h1>;
  }

  console.log(product);

  return (
    <main>
      <GoBack />
      <Info {...product[0]} />
      <Features features={product[0].features} />
      <Box box={product[0].includes} />
      <Gallery gallery={product[0].gallery} />
      <Featured featured={product[0].others} />
      <Categories />
      <About />
    </main>
  );
};

export default Product;
