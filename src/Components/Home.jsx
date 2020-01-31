import React from 'react';
import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';

export default function Home(props) {

  // goes to the Register form page
  const toRegister = (event) => {
    event.preventDefault();

    console.log(props);

    navigate('/register');
  }

  return (
    <div>
        <Button variant="contained" onClick={toRegister} color="primary" size="large">Register</Button>
    </div>
  );
}