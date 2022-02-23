import styled from 'styled-components';
import { Link } from 'react-router-dom';
import images from '../../../assets';
import backgroundImage from '../../../assets/home/desktop/pattern-circles.svg';

const Product1 = () => {
  return (
    <Wrapper>
      <img src={images.homeProduct1Mobile} alt='zx9-speaker' />
      <div className='info'>
        <h1>
          zx9 <br /> speaker
        </h1>
        <p className='body'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to='/' className='btn'>
          see products
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 55px 24px;
  background: var(--orange-color);
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
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
  }

  .body {
    opacity: 0.75;
  }

  .btn {
    background: var(--black-color);
  }
`;
export default Product1;
