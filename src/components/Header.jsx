/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderArea = styled.header`
  display: flex;
  background-color: #191919;
  ul {
    display: flex;
    a {
      padding: 0.5em 1em;
      color: white;
      text-decoration: none;
      cursor: pointer;
      font-weight: 700;
      &:hover {
        background-color: #5a5a5a;
      }
    }
  }
`;

export default class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <HeaderArea>
        <nav>
          <ul>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <p>{user}</p>
      </HeaderArea>
    );
  }
}
