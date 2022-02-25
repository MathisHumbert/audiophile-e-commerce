import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { footerLinksData, footerIconsData } from '../utils/data';
import images from '../assets';

const Footer = () => {
  return (
    <Wrapper>
      <div className='top-bar'></div>
      <Link to='/'>
        <img src={images.companyLogo} alt='company-logo' />
      </Link>
      <ul className='links'>
        {footerLinksData.map((item) => {
          const { id, title, url } = item;
          return (
            <li className='subtitle' key={id}>
              <Link to={url}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <p className='body'>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className='bottom'>
        <p className='body'>Copyright 2021. All Rights Reserved</p>
        <ul className='icons'>
          {footerIconsData.map((item) => {
            const { id, icon, url } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 52px 24px 38px 24px;
  background: var(--light-black-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  text-align: center;
  position: relative;

  .top-bar {
    position: absolute;
    top: 0;
    width: 101px;
    height: 4px;
    background: var(--orange-color);
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .icons {
    display: flex;
    gap: 1rem;

    li a svg {
      width: 24px;
      height: 24px;
    }
  }

  li a {
    color: var(--white-color);
    text-decoration: none;
  }

  .body {
    color: var(--white-color);
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    padding: 60px 40px 46px 40px;
    align-items: flex-start;
    gap: 2rem;

    .links {
      flex-direction: row;
      gap: 34px;
    }

    .body {
      text-align: justify;
    }

    .bottom {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
      margin-top: 48px;
    }
  }
`;
export default Footer;
