import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const { productName } = useParams();

  useEffect(() => {
    const fetchData = async (id) => {
      let { data } = await axios('http://localhost:3000/data.json');
      data = data.filter((item) => item.slug === id);
    };
  }, []);
  return (
    <main>
      {/* GO BACK */}
      {/* PRODUCT INFO */}
      {/* CART BUTTONS */}
      {/* FEATURES */}
      {/* IN THE BOX */}
      {/* GALLERY */}
      {/* FEATURED PRODUCTS */}
      {/* CATEGORIES */}
      {/* ABOUT */}
    </main>
  );
};

export default Product;
