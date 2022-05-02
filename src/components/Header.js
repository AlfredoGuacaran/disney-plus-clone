import React, { useEffect } from 'react';import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';
import BurgerMenu from './BurgerMenu';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      navigate('/');
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate('/login');
    });
  };

  //permanencia de el login cuando se hacer refresh a la pagina
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate('/');
      }
    });
  }, []);

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
        <UserImg onClick={signOut} src={userPhoto} />
        <Colapsable>
          <BurgerMenu />
        </Colapsable>
      </Nav>
    );

  if (!userName)
    return (
      <Nav>
        <Logo src='/images/logo.svg' />
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
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
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;

  @media (max-width: 960px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }

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

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;

  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Colapsable = styled.div`
  @media (min-width: 960px) {
    display: none;
  }
`;
