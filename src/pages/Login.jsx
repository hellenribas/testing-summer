/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  render() {
    const {
      user, password, handleChange, isRedirect, handleClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="user">
          Usuário:
          <input type="text" id="user" value={user} name="user" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" id="password" value={password} name="password" onChange={handleChange} />
        </label>

        <button type="button" onClick={handleClick}>Entrar</button>
        {isRedirect && <Redirect to="/home" /> }
      </form>
    );
  }
}
