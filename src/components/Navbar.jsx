import { useState } from 'react';
import styled from 'styled-components';
import mainLogo from '../assets/shared/desktop/logo.svg';
import checkoutLogo from '../assets/shared/desktop/icon-cart.svg';

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
      <img src={mainLogo} alt='main-logo' />
      <img src={checkoutLogo} alt='checkout-logo' />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--black-color);
  padding: 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
export default Navbar;
