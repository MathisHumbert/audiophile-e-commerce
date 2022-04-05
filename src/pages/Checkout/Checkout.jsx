import styled from 'styled-components';
import { GoBack } from '../../components';
import Form from './components/Form';
import Summary from './components/Summary';

const Checkout = () => {
  return (
    <main className='main-center'>
      <GoBack />
      <Wrapper>
        <Form />
        <Summary />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 98px;

  @media (min-width: 768px) {
    margin-bottom: 116px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 30px;
    margin-bottom: 141px;
  }
`;
export default Checkout;
