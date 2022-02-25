import {
  HeaderProducts,
  PageProducts,
  Categories,
  About,
} from '../../components';
import { earphonesPageData } from '../../utils/data';

const Earphones = () => {
  return (
    <main>
      <HeaderProducts title='earphones' />
      <div className='main-center'>
        <PageProducts products={earphonesPageData} />
        <Categories />
        <About />
      </div>
    </main>
  );
};

export default Earphones;
