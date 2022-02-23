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
      <PageProducts products={earphonesPageData} />
      <Categories />
      <About />
    </main>
  );
};

export default Earphones;
