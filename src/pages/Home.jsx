import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';
import Header from '../components/Header';

export default class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    characterList: [],
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
                  image={character.image}
                  name={character.name}
                  status={character.status}
                  gender={character.gender}
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
