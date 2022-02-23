import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageProducts = ({ products }) => {
  return (
    <Wrapper>
      {products.map((item) => {
        const { id, img, isNew, title, text, url } = item;
        return (
          <article key={id}>
            <img src={img} alt={title} className='product-img' />
            {isNew && <p className='overline'>new product</p>}
            <h4>{title}</h4>
            <p className='body'>{text}</p>
            <Link to={url} className='btn'>
              see product
            </Link>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 64px 24px 120px 24px;
  display: flex;
  flex-direction: column;
  gap: 120px;

  article {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    text-align: center;
  }

  img {
    width: 100%;
    margin-bottom: 8px;
  }

  .overline {
    color: var(--orange-color);
  }

  .body {
    opacity: 0.5;
  }
`;
export default PageProducts;
