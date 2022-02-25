import styled from 'styled-components';

const Gallery = ({ gallery }) => {
  const { first, second, third } = gallery;

  return (
    <Wrapper>
      <div className='left'>
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
      <picture className='right'>
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
  padding-top: 88px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
      max-height: 174px;
    }
  }

  .right img {
    max-height: 368px;
  }

  @media (min-width: 768px) {
    padding-top: 120px;
    flex-direction: row;
    width: 100%;

    .right img,
    .left img {
      max-height: inherit;
    }
  }
`;
export default Gallery;
