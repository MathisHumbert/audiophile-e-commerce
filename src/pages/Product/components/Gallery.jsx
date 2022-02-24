import styled from 'styled-components';

const Gallery = ({ gallery }) => {
  const { first, second, third } = gallery;

  return (
    <Wrapper>
      <div className='container'>
        <picture>
          <source
            media='(max-width: 768px)'
            srcSet={first.mobile}
            alt='first-mobile'
          />
          <source
            media='(max-width: 1440px)'
            srcSet={first.tablet}
            alt='first-tablet'
          />
          <source
            media='(min-width: 1440px)'
            srcSet={first.desktop}
            alt='first-dekstop'
          />
          <img src={first.mobile} alt='first-img' />
        </picture>
        <picture>
          <source
            media='(max-width: 768px)'
            srcSet={second.mobile}
            alt='second-mobile'
          />
          <source
            media='(max-width: 1440px)'
            srcSet={second.tablet}
            alt='second-tablet'
          />
          <source
            media='(min-width: 1440px)'
            srcSet={second.desktop}
            alt='second-dekstop'
          />
          <img src={second.mobile} alt='second-img' />
        </picture>
      </div>
      <picture>
        <source
          media='(max-width: 768px)'
          srcSet={third.mobile}
          alt='third-mobile'
        />
        <source
          media='(max-width: 1440px)'
          srcSet={third.tablet}
          alt='third-tablet'
        />
        <source
          media='(min-width: 1440px)'
          srcSet={third.desktop}
          alt='third-dekstop'
        />
        <img src={third.mobile} alt='third-img' />
      </picture>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 88px 24px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .container {
    picture:first-child img {
      margin-bottom: 20px;
    }
  }
`;
export default Gallery;
