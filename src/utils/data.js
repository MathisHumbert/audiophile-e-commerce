import images from '../assets';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

export const categoriesData = [
  {
    id: 1,
    img: images.headphonesCategory,
    title: 'headphones',
    url: '/headphones',
  },
  {
    id: 2,
    img: images.speakersCategory,
    title: 'speakers',
    url: '/speakers',
  },
  {
    id: 3,
    img: images.earphonesCategory,
    title: 'earphones',
    url: '/earphones',
  },
];

export const footerLinksData = [
  {
    id: 1,
    title: 'home',
    url: '/',
  },
  {
    id: 2,
    title: 'headphones',
    url: '/headphones',
  },
  {
    id: 3,
    title: 'speakers',
    url: '/speakers',
  },
  {
    id: 4,
    title: 'earphones',
    url: '/earphones',
  },
];

export const footerIconsData = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
    url: '/',
  },
  {
    id: 2,
    icon: <FaTwitter />,
    url: '/',
  },
  {
    id: 3,
    icon: <FaInstagram />,
    url: '/',
  },
];

export const headphonesPageData = [
  {
    id: 1,
    img: {
      mobile: images.headphonesProduct1Mobile,
      tablet: images.headphonesProduct1Tablet,
      desktop: images.headphonesProduct1Desktop,
    },
    isNew: true,
    title: 'XX99 Mark II  Headphones',
    text: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    url: '/products/xx99-mark-two-headphones',
  },
  {
    id: 2,
    img: {
      mobile: images.headphonesProduct2Mobile,
      tablet: images.headphonesProduct2Tablet,
      desktop: images.headphonesProduct2Desktop,
    },
    isNew: false,
    title: 'XX99 Mark I Headphones',
    text: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    url: '/products/xx99-mark-one-headphones',
  },
  {
    id: 3,
    img: {
      mobile: images.headphonesProduct3Mobile,
      tablet: images.headphonesProduct3Tablet,
      desktop: images.headphonesProduct3Desktop,
    },
    isNew: false,
    title: 'XX59 Headphones',
    text: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    url: '/products/xx59-headphones',
  },
];

export const earphonesPageData = [
  {
    id: 1,
    img: {
      mobile: images.earphonesProductMobile,
      tablet: images.earphonesProductTablet,
      desktop: images.earphonesProductDesktop,
    },
    isNew: true,
    title: 'YX1 WIRELESS EARPHONES',
    text: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    url: '/products/yx1-earphones',
  },
];

export const speakersPageData = [
  {
    id: 1,
    img: {
      mobile: images.speakersProduct1Mobile,
      tablet: images.speakersProduct1Tablet,
      desktop: images.speakersProduct1Desktop,
    },
    isNew: true,
    title: 'ZX9 speaker',
    text: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    url: '/products/zx9-speaker',
  },
  {
    id: 2,
    img: {
      mobile: images.speakersProduct2Mobile,
      tablet: images.speakersProduct2Tablet,
      desktop: images.speakersProduct2Desktop,
    },
    isNew: false,
    title: 'ZX7 speaker',
    text: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    url: '/products/zx7-speaker',
  },
];
