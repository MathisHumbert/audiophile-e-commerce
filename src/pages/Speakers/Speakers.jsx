import {
  HeaderProducts,
  PageProducts,
  Categories,
  About,
} from '../../components';
import { speakersPageData } from '../../utils/data';

const Speakers = () => {
  return (
    <main>
      <HeaderProducts title='speakers' />
      <PageProducts products={speakersPageData} />
      <Categories />
      <About />
    </main>
  );
};

export default Speakers;
