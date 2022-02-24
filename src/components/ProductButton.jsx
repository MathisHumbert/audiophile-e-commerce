import styled from 'styled-components';

const ProductButton = ({ amount, incAmount, decAmount }) => {
  return (
    <Wrapper className='product-button'>
      <button onClick={decAmount}>-</button>
      <p className='subtitle'>{amount}</p>
      <button onClick={incAmount}>+</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--grey-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    background: 0;
    border: 0;
    opacity: 0.25;
    font-size: 13px;
    line-height: 0;
  }
`;

export default ProductButton;
