import styled from 'styled-components';
import ProductButton from './ProductButton';
import { formatPrice } from '../utils/helpers';

const CartItem = ({ id, name, price, amount, img }) => {
  return (
    <Wrapper>
      <div className='left'>
        <img src={img} alt={name} />
        <div className='item-info'>
          <p className='body item-name'>{name}</p>
          <p className='body item-price'>{formatPrice(price)}</p>
        </div>
      </div>
      <ProductButton amount={amount} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    gap: 1rem;
  }

  .product-button {
    min-width: 96px;
    min-height: 2rem;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }

  .item-name {
    font-weight: 700;
  }

  .item-price {
    font-weight: 700;
    opacity: 0.5;
  }
`;
export default CartItem;
