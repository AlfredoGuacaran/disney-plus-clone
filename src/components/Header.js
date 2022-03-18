import React from 'react';
import styled from 'styled-components';
import { selectUserName, selectUserPhoto } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  if (userName)
    return (
      <Nav>
        <Logo src='/images/logo.svg' />
        <NavMenu>
          <a href='/'>
            <img src='/images/home-icon.svg' alt='' />
            <span>HOME</span>
          </a>
          <a href='/'>
            <img src='/images/search-icon.svg' alt='' />
            <span>SEARCH</span>
          </a>
          <a href='/'>
            <img src='/images/watchlist-icon.svg' alt='' />
            <span>WATCHLIST</span>
          </a>
          <a href='/'>
            <img src='/images/original-icon.svg' alt='' />
            <span>ORIGINALS</span>
          </a>
          <a href='/'>
            <img src='/images/movie-icon.svg' alt='' />
            <span>MOVIES</span>
          </a>
          <a href='/'>
            <img src='/images/series-icon.svg' alt='' />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src='https://avatars.githubusercontent.com/u/79604260?s=400&u=c988020d6e8e4f1acfdb483a8e02682bc1b716ff&v=4' />
      </Nav>
    );

  if (!userName)
    return (
      <Nav>
        <Logo src='/images/logo.svg' />
        <Login>Login</Login>
      </Nav>
    );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pinter;

    img {
      height: 15px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opatity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div``;
