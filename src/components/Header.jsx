import React, { Component } from 'react';
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
    return (
      <HeaderArea>
        <nav>
          <ul>
            <li>
              <a href="/characters">Characters</a>
            </li>
            <li>
              <a href="/locations">Locations</a>
            </li>
            <li>
              <a href="/favorites">Favorites</a>
            </li>
          </ul>
        </nav>
      </HeaderArea>
    );
  }
}
