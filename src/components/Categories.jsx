import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { categoriesData } from '../utils/data';

const Categories = ({ onClick }) => {
  return (
    <Wrapper>
      {categoriesData.map((item) => {
        const { id, img, title, url } = item;
        return (
          <article key={id}>
            <img src={img} alt='title' />
            <h6>{title}</h6>
            <Link to={url} className='subtitle' onClick={onClick}>
              shop <FaChevronRight />
            </Link>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 66px;

  article {
    width: 100%;
    height: 165px;
    background: var(--grey-color);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
  }

  img {
    width: 147px;
    margin-top: -50px;
  }

  .subtitle {
    display: flex;
    align-items: center;
    gap: 13px;
    text-decoration: none;
    color: var(--black-color);
    opacity: 0.5;
    margin-top: 17px;
    line-height: 0;
  }

  svg {
    color: var(--orange-color);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;
export default Categories;
