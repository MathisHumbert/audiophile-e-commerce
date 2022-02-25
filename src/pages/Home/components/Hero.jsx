import styled from 'styled-components';
import images from '../../../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <p className='overline'>new product</p>
        <h1>XX99 Mark II HeadphoneS</h1>
        <p className='body'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to='/products/xx99-mark-two-headphones' className='btn'>
          see product
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh - 89px);
  width: 100%;
  background-image: url(${images.homeHeroMobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  div {
    text-align: center;
    padding: 0 24px;
  }

  .overline {
    color: var(--white-color);
    opacity: 0.5;
  }

  h1 {
    color: var(--white-color);
    margin-top: 16px;
    margin-bottom: 24px;
  }

  .body {
    color: var(--white-color);
    opacity: 0.75;
    max-width: 350px;
    margin: 0 auto;
  }

  .btn {
    margin-top: 28px;
  }

  @media (min-width: 768px) {
    background-image: url(${images.homeHeroTablet});
    margin-bottom: 96px;
  }
`;
export default Hero;
