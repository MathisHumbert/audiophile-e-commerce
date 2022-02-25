import styled from 'styled-components';
import { Categories, About } from '../../components';
import Hero from './components/Hero';
import Products from './components/Products';

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <div className='main-center'>
        <Categories />
        <Products />
        <About />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  @media (min-width: 769px) {
    .about-section {
      padding: 96px 0;
    }
  }
`;
export default Home;
