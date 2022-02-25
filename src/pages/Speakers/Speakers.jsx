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
      <div className='main-center'>
        <PageProducts products={speakersPageData} />
        <Categories />
        <About />
      </div>
    </main>
  );
};

export default Speakers;
