import styled from 'styled-components';
import { Link } from 'react-router-dom';
import images from '../../../assets';

const Product2 = () => {
  return (
    <Wrapper>
      <div className='info'>
        <h4>zx7 speaker</h4>
        <Link to='/' className='btn transparent'>
          see products
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  height: 320px;
  background-image: url(${images.homeProduct2Mobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  align-items: center;

  .info {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
export default Product2;
