import React from 'react';
import Button from '@material-ui/core/Button';


export default function Home(props) {

  // goes to the Register form page
  const toRegister = (event) => {
    event.preventDefault();

    props.history.push('/register')
  }

  return (
    <div>
        <Button variant="contained" onClick={toRegister} color="primary" size="large">Register</Button>
    </div>
  );
}