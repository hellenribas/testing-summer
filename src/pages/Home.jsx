import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';

export default class Home extends Component {
  render() {
    return (
      <div>
        <CharacterCard
          image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          name="Rick Sanchez"
          status="Alive"
          gender="male"
        />
      </div>
    );
  }
}
