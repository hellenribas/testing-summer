/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    user: '',
    password: '',
    isRedirect: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    this.setState({
      isRedirect: true,
    });
  };

  render() {
    const { user, password, isRedirect } = this.state;
    return (
      <Switch>
        <Route exact path="/" render={(props) => <Login { ...props } user={ user } password={ password } handleChange={ this.handleChange } isRedirect={ isRedirect } handleClick={ this.handleClick } />} />
        <Route exact path="/home" render={() => <Home user={ user } />} />
        <Route exact path="/favorites" render={() => <Favorites />} />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default App;
