import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearCart } from '../../../redux/features/cartSlice';
import {
  resetForm,
  addCartToCheckout,
} from '../../../redux/features/checkoutSlice';
import { toggleCheckoutAside } from '../../../redux/features/asideSlice';
import { controlForm, formatPrice } from '../../../utils/helpers';
import Item from './Item';

const Summary = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  const { checkout } = useSelector((state) => state.checkout);

  const onClick = () => {
    const continueAndPay = controlForm(checkout.emoney);

    if (continueAndPay) {
      dispatch(resetForm());
      dispatch(addCartToCheckout({ cart, total }));
      dispatch(clearCart());
      dispatch(toggleCheckoutAside());
    }
  };

  return (
    <Wrapper>
      <h5>summary</h5>
      <div className='items-container'>
        {cart.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
      <div className='price-container'>
        <div className='price-info'>
          <p className='body'>total</p>
          <h5>{formatPrice(total)}</h5>
        </div>
        <div className='price-info'>
          <p className='body'>shipping</p>
          <h5>{formatPrice(50)}</h5>
        </div>
        <div className='price-info'>
          <p className='body'>var (included</p>
          <h5>{formatPrice(total * 0.2)}</h5>
        </div>
        <div className='price-info'>
          <p className='body'>grand total</p>
          <h5>{formatPrice(total + 50)}</h5>
        </div>
      </div>
      <button className='btn' onClick={onClick}>
        continue & pay
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--white-color);
  padding: 32px 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .items-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .price-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .price-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .body {
      opacity: 0.5;
      text-transform: uppercase;
    }

    &:last-child {
      margin-top: 1rem;

      h5 {
        color: var(--orange-color);
      }
    }
  }

  button {
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 32px;
  }
`;
export default Summary;
