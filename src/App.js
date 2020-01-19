import React from 'react';
import './scss/home.scss';
import { Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import ProtectedRoutes from './Components/Auth/ProtectedRoutes';


function App() {

  let location = useLocation();

  if(location.pathname === '/work') {
    document.body.className = "altbody";
  } else {
    document.body.className = "mainbody";
  }


  return (
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoutes path="dashboard/*" />
      </div>
  );
}

export default App;
