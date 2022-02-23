import {
  HeaderProducts,
  PageProducts,
  Categories,
  About,
} from '../../components';
import { headphonesPageData } from '../../utils/data';

const Headphones = () => {
  return (
    <main>
      <HeaderProducts title='headphones' />
      <PageProducts products={headphonesPageData} />
      <Categories />
      <About />
    </main>
  );
};

export default Headphones;
