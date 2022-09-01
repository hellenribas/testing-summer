import React, { Component } from 'react';
import { string, bool } from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default class CharacterCard extends Component {
  render() {
    const {
      image, name, status, gender, isFavorited,
    } = this.props;

    return (
      <div className="card-character-area">
        <div className="card-character-image">
          <img src={image} alt={name} />
        </div>

        <div className="card-character-details">
          <span>{ name }</span>
          <span>{ status }</span>
          <span>{ gender }</span>
          <button
            type="button"
          >
            {
              isFavorited ? (
                <>
                  <AiFillStar />
                  <span>Favorito</span>
                </>
              ) : (
                <>
                  <AiOutlineStar />
                  <span>Favorito</span>
                </>
              )
            }
          </button>
        </div>
      </div>
    );
  }
}

CharacterCard.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  status: string.isRequired,
  gender: string.isRequired,
  isFavorited: bool.isRequired,
};
