import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import images from '../assets';
import { toggleCartAside, toggleMenuAside } from '../redux/features/asideSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.aside);

  return (
    <Wrapper>
      <button
        className={
          isMenuOpen ? 'bar-container bar-close' : 'bar-container bar-line'
        }
        onClick={() => dispatch(toggleMenuAside())}
      >
        <div className='bar1 bar'></div>
        <div className='bar2 bar'></div>
        <div className='bar3 bar'></div>
      </button>
      <Link to='/' className='logo'>
        <img src={images.companyLogo} alt='company-logo' />
      </Link>
      <button className='checkout' onClick={() => dispatch(toggleCartAside())}>
        <img src={images.checkoutLogo} alt='checkout-logo' />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--black-color);
  padding: 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .checkout {
    background: 0;
    border: 0;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
    padding: 32px 40px;

    .logo {
      left: 98px;
      transform: translate(0, -50%);
    }
  }
`;
export default Navbar;
