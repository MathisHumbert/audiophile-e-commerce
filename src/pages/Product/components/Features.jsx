import styled from 'styled-components';

const Features = ({ features }) => {
  const featuresArr = features.split(/\r?\n/).filter((item) => item !== '');

  return (
    <Wrapper>
      <h3 className='title'>features</h3>
      <div className='text'>
        {featuresArr.map((item, index) => {
          return (
            <p key={index} className='body'>
              {item}
            </p>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 88px 24px 0 24px;

  .body {
    opacity: 0.5;
    text-align: justify;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;
export default Features;
