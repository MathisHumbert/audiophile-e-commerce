import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import images from '../assets';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'bar-container bar-close' : 'bar-container bar-line'
        }
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <div className='bar1 bar'></div>
        <div className='bar2 bar'></div>
        <div className='bar3 bar'></div>
      </div>
      <Link to='/'>
        <img src={images.companyLogo} alt='company-logo' />
      </Link>
      <img src={images.checkoutLogo} alt='checkout-logo' />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--black-color);
  padding: 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Navbar;
