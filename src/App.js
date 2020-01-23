import React from 'react';
import './scss/home.scss';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import ProtectedRoutes from './Components/Auth/ProtectedRoutes';


function App() {


  return (
      <div className="App">
        <Router>
          <Home path="/" />
          <Register path="register" />
          <Login path="login" />
          <ProtectedRoutes path="dashboard/*" />
        </Router>
      </div>
  );
}

export default App;
