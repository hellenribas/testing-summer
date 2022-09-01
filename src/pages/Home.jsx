import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';
import Header from '../components/Header';

export default class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    characterList: [],
    favoritedCharacters: [], // Id dos personagens favoritados
    isLoading: true,
  };

  componentDidMount() {
    const fetchApi = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();

      this.setState({ isLoading: false, characterList: data.results });
    };
    fetchApi();
  }

  handleFavorites = (id) => {
    const { favoritedCharacters } = this.state;
    const favoritedChar = favoritedCharacters.find((favoritedId) => favoritedId === id);
    if (favoritedChar) { // Remove personnagem favorito
      const updatedFavorites = favoritedCharacters.filter((favoritedId) => favoritedId !== id);
      this.setState({ favoritedCharacters: updatedFavorites });
    } else { // Adiciona personagem favorito
      this.setState({ favoritedCharacters: [...favoritedCharacters, id] });
    }
  };

  getFavorited = (id) => {
    const { favoritedCharacters } = this.state;
    return favoritedCharacters.some((favoriteId) => favoriteId === id);
  };

  render() {
    const { characterList, isLoading } = this.state;

    return (
      <>
        <Header />
        {
        !isLoading && (
          <div className="card-area">
            {
              characterList.map((character) => (
                <CharacterCard
                  key={character.id}
                  id={character.id}
                  image={character.image}
                  name={character.name}
                  status={character.status}
                  gender={character.gender}
                  handleFavorites={this.handleFavorites}
                  isFavorited={this.getFavorited(character.id)}
                />
              ))
            }
          </div>
        )
        }
      </>
    );
  }
}
