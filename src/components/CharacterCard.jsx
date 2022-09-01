import React, { Component } from 'react';
import { string } from 'prop-types';

export default class CharacterCard extends Component {
  render() {
    const {
      image, name, status, gender,
    } = this.props;

    return (
      <div className="card-character-area">
        <img src={image} alt={name} />
        <span>{ name }</span>
        <span>{ status }</span>
        <span>{ gender }</span>
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
