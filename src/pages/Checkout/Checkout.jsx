import styled from 'styled-components';
import { GoBack } from '../../components';
import Form from './components/Form';
import Summary from './components/Summary';
import CheckoutAside from './components/CheckoutAside';

const Checkout = () => {
  return (
    <main className='main-center'>
      <CheckoutAside />
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
`;
export default Checkout;
