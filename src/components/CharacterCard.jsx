import React, { Component } from 'react';
import { string } from 'prop-types';

export default class CharacterCard extends Component {
  render() {
    const {
      image, name, status, gender,
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
};
