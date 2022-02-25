import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Categories } from '.';
import { toggleMenuAside } from '../redux/features/asideSlice';

const MenuAside = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.aside);

  const onClick = () => {
    dispatch(toggleMenuAside());
  };

  const handleClick = (e) => {
    if (!e.target.classList.contains('menu-aside')) return;
    dispatch(toggleMenuAside());
  };

  return (
    <Wrapper
      className={isMenuOpen ? 'menu-aside open' : 'menu-aside'}
      onClick={handleClick}
    >
      <div className='content'>
        <Categories onClick={onClick} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  padding-bottom: 20px;
  z-index: -1;
  opacity: 0;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: scroll;
  top: 89px;

  &.open {
    z-index: 5;
    opacity: 1;
  }

  .content {
    cursor: initial;
    background: var(--white-color);
    padding: 32px 28px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
export default MenuAside;
