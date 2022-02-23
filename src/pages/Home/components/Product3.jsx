import styled from 'styled-components';
import { Link } from 'react-router-dom';
import images from '../../../assets';

const Product3 = () => {
  return (
    <Wrapper>
      <div className='top'></div>
      <div className='bottom'>
        <h4>yx1 earphones</h4>
        <Link to='/products/yx1-earphones' className='btn transparent'>
          see products
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .top {
    width: 100%;
    height: 200px;
    background-image: url(${images.homeProduct3Mobile});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
  }

  .bottom {
    background: var(--grey-color);
    padding: 41px 56px 41px 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
export default Product3;
