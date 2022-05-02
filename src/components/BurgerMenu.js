import React from 'react';import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
const BurgerMenu = () => {
  return (
    <Menu styles={styles}>
      <Item href='/' className='menu-item'>
        <img src='/images/home-icon.svg' alt='' />
        <span>HOME</span>
      </Item>
      <Item href='/' className='menu-item'>
        <img src='/images/search-icon.svg' alt='' />
        <span>SEARCH</span>
      </Item>
      <Item href='/' className='menu-item'>
        <img src='/images/watchlist-icon.svg' alt='' />
        <span>WATCHLIST</span>
      </Item>
      <Item href='/' className='menu-item'>
        <img src='/images/original-icon.svg' alt='' />
        <span>ORIGINALS</span>
      </Item>
      <Item href='/' className='menu-item'>
        <img src='/images/movie-icon.svg' alt='' />
        <span>MOVIES</span>
      </Item>
      <Item href='/' className='menu-item'>
        <img src='/images/series-icon.svg' alt='' />
        <span>SERIES</span>
      </Item>
    </Menu>
  );
};

export default BurgerMenu;

const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
  },
  bmBurgerBars: {
    background: '#ffff',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    height: '100%',
    right: '0px',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em',
  },
  bmItem: {},
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const Item = styled.a`
  & img {
    height: 25px;
  }
`;
