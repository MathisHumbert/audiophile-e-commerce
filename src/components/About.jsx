import styled from 'styled-components';
import images from '../assets';

const About = () => {
  return (
    <Wrapper>
      <img src={images.aboutMobile} alt='about' />
      <article>
        <h4>
          Bringing you the <span>best</span> audio gear
        </h4>
        <p className='body'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 120px 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;

  img {
    width: 100%;
  }

  .body {
    opacity: 0.5;
    margin-top: 2rem;
  }

  span {
    color: var(--orange-color);
  }
`;
export default About;
