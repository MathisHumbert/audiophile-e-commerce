import styled from 'styled-components';
import images from '../../../assets';

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
        <button className='btn'>see product</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url(${images.homeHeroMobile});
  height: calc(100vh - 89px);
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

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
  }

  button {
    margin-top: 28px;
  }
`;
export default Hero;
