import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const expand = keyframes`
  0%  {
    height: 5em;
  } 50% {
    height: 2em;
  } 100% {
    height: 5em;
  }
`;

const LoadingArea = styled.div`
  background-color: #191919;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 1em;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  div {
    width: 1.5em;
    animation: ${expand} 1s linear infinite;
    height: 2em;
    background-color: white;
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
  }
`;

export default class Loading extends Component {
  render() {
    return (
      <LoadingArea>
        <div />
        <div />
        <div />
      </LoadingArea>
    );
  }
}
