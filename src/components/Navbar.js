import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

const NavbarStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: #3b362d;
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 1.5rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: #3295a8;
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarStyle>
      <Zoom>
        <ul>
          <li>
            <NavLink to="/" exact>
              Hello.
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/Zone">zone</NavLink>
          </li>
        </ul>
      </Zoom>
    </NavbarStyle>
  );
}
