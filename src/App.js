import React from 'react';
import './scss/home.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
