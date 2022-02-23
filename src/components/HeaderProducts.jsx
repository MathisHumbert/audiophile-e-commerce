import styled from 'styled-components';

const HeaderProducts = ({ title }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 102px;
  background: var(--black-color);
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    color: var(--white-color);
  }
`;
export default HeaderProducts;
