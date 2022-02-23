import images from '../assets';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

export const categoriesData = [
  {
    id: 1,
    img: images.headphonesCategory,
    title: 'headphones',
  },
  {
    id: 2,
    img: images.speakersCategory,
    title: 'speakers',
  },
  {
    id: 3,
    img: images.earphonesCategory,
    title: 'earphones',
  },
];

export const footerLinksData = [
  {
    id: 1,
    title: 'home',
    url: '/',
  },
  {
    id: 1,
    title: 'headphones',
    url: '/headphones',
  },
  {
    id: 1,
    title: 'speakers',
    url: '/speakers',
  },
  {
    id: 1,
    title: 'hearphones',
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
