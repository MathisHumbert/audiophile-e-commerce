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
  padding: 120px 24px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Products;
