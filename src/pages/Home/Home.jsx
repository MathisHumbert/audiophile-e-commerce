import styled from 'styled-components';
import Hero from './components/Hero';
import Categories from '../../components/Categories';
import Products from './components/Products';
import About from '../../components/About';

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
