import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Featured = ({ featured }) => {
  return (
    <Wrapper>
      <h3 className='title'>you may also like</h3>
      <div className='container'>
        {featured.map((item, index) => {
          const { image, name, slug } = item;
          return (
            <article key={index}>
              <div className='img-container'>
                <picture>
                  <source
                    media='(max-width: 768px)'
                    srcSet={image.mobile}
                    alt={name}
                  />
                  <source
                    media='(max-width: 1440px)'
                    srcSet={image.tablet}
                    alt={name}
                  />
                  <source
                    media='(min-width: 1440px)'
                    srcSet={image.desktop}
                    alt={name}
                  />
                  <img src={image.mobile} alt='first-img' />
                </picture>
              </div>
              <h3>{name}</h3>
              <Link to={`/products/${slug}`} className='btn'>
                see product
              </Link>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 120px 24px;

  .title {
    text-align: center;
    margin-bottom: 40px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
export default Featured;
