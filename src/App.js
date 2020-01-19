import React from 'react';
import './scss/home.scss';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import AbsoluteWrapper from './Components/AbsoluteWrapper';
import ProtectedRoutes from './components/Auth/Routes/ProtectedRoutes';


function App() {

  let location = useLocation();

  if(location.pathname === '/work') {
    document.body.className = "altbody";
  } else {
    document.body.className = "mainbody";
  }



  let transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <AbsoluteWrapper>
      <div className="App">
        <div>
          <Route exact path="/" component={Home} />
          <ProtectedRoutes path="dashboard/*" />
          {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </animated.div>
          ))} 
      </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default App;
