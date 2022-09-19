import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';
import { getLocalStorage } from '../helpers/localStorage';

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      favoriteArray: [],
    };
  }

  componentDidMount() {
    const fetchApi = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();

      this.setState({ data: data.results }, this.getElementsId);
    };
    fetchApi();
  }

  getElementsId = () => {
    const arrayLocal = getLocalStorage('favoritedCharacters');
    const { data } = this.state;
    const newArray = data.filter((e) => arrayLocal.includes((`${e.id}`)));
    this.setState((state) => ({
      favoriteArray: [...state.favoriteArray, ...newArray],
    }));
  };

  render() {
    const { favoriteArray } = this.state;
    return (
      <div>
        {
          favoriteArray.map((character) => (
            <CharacterCard
              key={character.id}
              data-test-id={character.id}
              id={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              gender={character.gender}
              handleFavorites={this.handleFavorites}
              isFavorited
            />
          ))
        }
      </div>
    );
  }
}
