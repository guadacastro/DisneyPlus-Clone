import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
  const { offset, fadeable } = props;
  var scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var opacity = (offset/scrollMaxY)*2;
  if(opacity>1){
    opacity = 1
  }


// console.log('opacity:', opacity);
 
  
  return (
    <Nav fadeable={fadeable} opacity={opacity} >
      <Logo src="./images/logo.svg" />
      <NavMenu>
        <Link to="/">
          <a>
            <img src="/images/home-icon.svg" />
            <span>HOME</span>
          </a>
        </Link>

        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="./images/MikeWazowski.jpeg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.fadeable? `rgba(0, 0, 0, ${props.opacity})`: '#090b13'};
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  position: fixed;
  z-index: 1000;
  
`;

const Logo = styled.img`
    width 80px;
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
        cursor: pointer;
        text-decoration: none;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            color: #FFFFFF;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
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
  heigth: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
