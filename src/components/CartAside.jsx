import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import {
  toggleCart,
  toggleCartInfo,
  clearCart,
} from '../redux/features/cartSlice';
import CartItem from './CartItem';

const CartAside = () => {
  const dispatch = useDispatch();
  const { cart, total, amount, isCartOpen } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(toggleCartInfo());
  }, [cart]);

  const handleClick = (e) => {
    if (!e.target.classList.contains('cart-aside')) return;
    dispatch(toggleCart());
  };

  return (
    <Wrapper
      className={isCartOpen ? 'cart-aside open' : 'cart-aside'}
      onClick={handleClick}
    >
      <div className='content'>
        {cart.length === 0 ? (
          <div className='content empty'>
            <h6>
              Your cart is empty. <br /> Fill it!
            </h6>
          </div>
        ) : (
          <>
            <header>
              <h6>cart ({amount})</h6>
              <p className='body' onClick={() => dispatch(clearCart())}>
                Remove all
              </p>
            </header>
            <div className='items-container'>
              {cart.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </div>
            <footer>
              <div className='price'>
                <p className='body'>total</p>
                <h6>{formatPrice(total)}</h6>
              </div>
              <Link to='/checkout' className='btn'>
                checkout
              </Link>
            </footer>
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  top: 89px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: scroll;

  &.open {
    z-index: 5;
    opacity: 1;
  }

  .content {
    cursor: initial;
    background: var(--white-color);
    padding: 32px 28px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .empty {
    text-align: center;
  }

  header {
    display: flex;
    justify-content: space-between;

    .body {
      text-decoration: underline;
      opacity: 0.5;
    }
  }

  .items-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .price {
    display: flex;
    justify-content: space-between;

    .body {
      opacity: 0.6;
      text-transform: uppercase;
    }
  }

  .btn {
    margin-top: 24px;
    width: 100%;
  }

  h6 {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.3px;
  }
`;
export default CartAside;
