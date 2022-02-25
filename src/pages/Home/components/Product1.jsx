import styled from 'styled-components';
import { Link } from 'react-router-dom';
import images from '../../../assets';

const Product1 = () => {
  return (
    <Wrapper>
      <picture>
        <source
          media='(max-width: 768px)'
          srcSet={images.homeProduct1Mobile}
          alt='zx9-speaker'
        />
        <source
          media='(max-width: 1440px)'
          srcSet={images.homeProduct1Tablet}
          alt='zx9-speaker'
        />
        <source
          media='(min-width: 1440px)'
          srcSet={images.homeProduct1Desktop}
          alt='zx9-speaker'
        />
        <img src={images.homeProduct1Mobile} alt='first-img' />
      </picture>
      <div className='info'>
        <h1>
          zx9 <br /> speaker
        </h1>
        <p className='body'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to='/products/zx9-speaker' className='btn'>
          see product
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 55px 24px;
  height: 600px;
  background: var(--orange-color);
  background-image: url(${images.circleSvg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;

  img {
    width: 172px;
  }

  .info {
    text-align: center;
  }

  h1,
  .body {
    color: var(--white-color);
    margin: 24px 0 24px 0;
    max-width: 350px;
  }

  .body {
    opacity: 0.75;
  }

  .btn {
    background: var(--black-color);
  }

  @media (min-width: 768px) {
    padding: 52px 0 64px;
    height: 600px;

    img {
      width: 197px;
    }
  }
`;
export default Product1;
