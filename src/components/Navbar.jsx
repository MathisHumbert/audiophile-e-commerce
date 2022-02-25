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
      <Link to='/'>
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

  .checkout {
    background: 0;
    border: 0;
  }
`;
export default Navbar;
