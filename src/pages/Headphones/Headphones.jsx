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
      <div className='main-center'>
        <PageProducts products={headphonesPageData} />
        <Categories />
        <About />
      </div>
    </main>
  );
};

export default Headphones;
