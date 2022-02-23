import styled from 'styled-components';
import { Categories, About } from '../../components';
import Hero from './components/Hero';
import Products from './components/Products';

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Categories />
      <Products />
      <About />
    </Wrapper>
  );
};

const Wrapper = styled.main``;
export default Home;
