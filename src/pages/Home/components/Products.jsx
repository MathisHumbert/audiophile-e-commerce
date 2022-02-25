import styled from 'styled-components';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';

const Products = () => {
  return (
    <Wrapper>
      <Product1 />
      <Product2 />
      <Product3 />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export default Products;
