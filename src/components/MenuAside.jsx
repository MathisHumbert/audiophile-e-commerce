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
  top: 86.27px;

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

  @media (min-width: 768px) {
    .content {
      padding: 56px 40px 66px 40px;
    }
  }
`;
export default MenuAside;
