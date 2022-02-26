import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { formatPrice } from '../../../utils/helpers';
import Item from './Item';
import { toggleCheckoutAside } from '../../../redux/features/asideSlice';

const CheckoutAside = () => {
  const dispatch = useDispatch();
  const { checkoutCart, checkoutCartTotal } = useSelector(
    (state) => state.checkout
  );
  const { isCheckoutOpen } = useSelector((state) => state.aside);

  console.log(checkoutCart);

  return (
    <Wrapper
      className={isCheckoutOpen ? 'checkout-aside open' : 'checkout-aside'}
    >
      <div className='content'>
        <header>
          <div className='logo'>
            <FaCheck />
          </div>
          <h3>
            thank you <br /> for your order
          </h3>
          <p className='body'>
            You will receive an email confirmation shortly.
          </p>
        </header>
        <div className='container'>
          <div className='items'>
            <Item {...checkoutCart[0]} />
            {checkoutCart.length > 1 && (
              <>
                <hr />
                <p className='small'>
                  and {checkoutCart.length - 1} other item(s)
                </p>
              </>
            )}
          </div>
          <div className='price'>
            <p className='body'>grand total</p>
            <h5>{formatPrice(checkoutCartTotal)}</h5>
          </div>
        </div>
        <Link
          to='/'
          className='btn'
          onClick={() => dispatch(toggleCheckoutAside())}
        >
          back to home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  cursor: initial;

  .content {
    cursor: initial;
    background: var(--white-color);
    padding: 32px;
    margin: 225px 24px 50px 24px;
    border-radius: 8px;
  }

  .logo {
    width: 64px;
    height: 64px;
    background: var(--orange-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 30px;
      height: 22px;
      color: var(--white-color);
    }
  }

  h3 {
    line-height: 28px;
    margin: 24px 0 1rem;
  }

  .container {
    margin: 24px 0;
  }

  .items {
    background: var(--grey-color);
    padding: 24px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    hr {
      background: var(--black-color);
      opacity: 0.08;
    }

    .small {
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: -0.21px;
      opacity: 0.5;
      text-align: center;
    }
  }

  .price {
    background-color: var(--black-color);
    padding: 24px 16px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: var(--white-color);

    .body {
      text-transform: uppercase;
      opacity: 0.5;
    }
  }

  .btn {
    width: 100%;
  }

  @media (min-width: 768px) {
    .content {
      padding: 48px;
      margin-left: auto;
      margin-right: auto;
      max-width: 540px;
    }

    h3 {
      line-height: 38px;
      margin: 33px 0 24px;
    }

    .container {
      margin: 33px 0 46px;
      display: grid;
      grid-template-columns: 55% 45%;

      .items {
        border-bottom-left-radius: 8px;
        border-top-right-radius: 0;
      }

      .price {
        padding: 0;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 24px;
        gap: 8px;
      }
    }
  }
`;
export default CheckoutAside;
