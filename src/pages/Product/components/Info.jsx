import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ProductButton from '../../../components/ProductButton';
import { formatPrice } from '../../../utils/helpers';
import { addItemToCart, openCart } from '../../../redux/features/cartSlice';

const Info = ({ description, image, name, new: isNew, price, slug }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const incAmount = () => {
    setAmount((prevState) => prevState + 1);
  };

  const decAmount = () => {
    setAmount((prevState) => {
      if (prevState === 1) {
        return 1;
      }
      return prevState - 1;
    });
  };

  const addToCart = () => {
    const item = {
      id: slug,
      name,
      price,
      amount,
    };
    dispatch(addItemToCart(item));
    setAmount(1);
  };

  return (
    <Wrapper>
      <img src={image.mobile} alt={name} />
      <div className='container'>
        {isNew && <p className='overline'>new product</p>}
        <h4>{name}</h4>
        <p className='body'>{description}</p>
        <h6>{formatPrice(price)}</h6>
        <div className='btn-container'>
          <ProductButton
            amount={amount}
            incAmount={incAmount}
            decAmount={decAmount}
          />
          <button className='btn' onClick={addToCart}>
            add to cart
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .overline {
    color: var(--orange-color);
  }

  .body {
    opacity: 0.5;
  }

  .product-button {
    width: 120px;
    height: 48px;
    margin-right: 2rem;
    margin-top: 8px;
  }
`;
export default Info;
