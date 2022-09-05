import React, { Component } from 'react';
import {
  string, bool, number, func,
} from 'prop-types';
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';

const CardArea = styled.div`
  display: flex;
  width: 15em;
  flex-direction: row;
  padding: 1em;
  border-radius: 16px;
  background-color: #191919;
  color: white;
  position: relative;
  margin-bottom: 1em;
  .card-character-image {
    display: flex;
    width: 100%;
    flex-direction: row;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-character-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .favorite-area {
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      font-size: 2em;
      color: ${({ isFavorited }) => (isFavorited ? 'yellow' : 'white')};
    }
  }
`;

export default class CharacterCard extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const {
      // eslint-disable-next-line react/prop-types
      image, name, status, gender, isFavorited, id, handleFavorites,
    } = this.props;
    const { checkFav } = this.state;

    return (
      <CardArea isFavorited={isFavorited}>
        <div className="card-character-image">
          <img src={image} alt={name} />
        </div>

        <div className="card-character-details">
          <span>{ name }</span>
          <span>{ status }</span>
          <span>{ gender }</span>
          {/* <button
            type="button"
            onClick={() => handleFavorites(id)}
          >
            {
              isFavorited ? (
                <>
                  <AiFillStar />
                  <span>Remover dos Favorito</span>
                </>
              ) : (
                <>
                  <AiOutlineStar />
                  <span>Adiconar nos Favorito</span>
                </>
              )
            }
          </button> */}
        </div>

        <div className="favorite-area">
          {/* <button
            type="button"
            title={isFavorited ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            onClick={() => handleFavorites(id)}
          >
            {
              isFavorited ? <AiFillStar /> : <AiOutlineStar />
            }
          </button> */}
          <input type="checkbox" onChange={handleFavorites} checked={checkFav} id={id} />
        </div>
      </CardArea>
    );
  }
}

CharacterCard.propTypes = {
  id: number.isRequired,
  image: string.isRequired,
  name: string.isRequired,
  status: string.isRequired,
  gender: string.isRequired,
  isFavorited: bool.isRequired,
  handleFavorites: func.isRequired,
};
